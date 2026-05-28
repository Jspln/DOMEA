import fs from "fs";
import path from "path";
import { getStore } from "@netlify/blobs";

const PRICES_FILE = path.join(process.cwd(), "src/data/prices.json");
const BLOB_KEY = "prices";
const STORE_NAME = "domea-prices";

export type Prices = Record<string, number>;

export const defaultPrices: Prices = {
  "entretien-regulier": 28,
  "grand-menage": 32,
  blanchisserie: 26,
  organisation: 35,
  jardinage: 30,
};

export async function getPricesAsync(): Promise<Prices> {
  // Essaye Blobs (Netlify production)
  try {
    const store = getStore(STORE_NAME);
    const data = await store.get(BLOB_KEY, { type: "json" });
    if (data && typeof data === "object") return { ...defaultPrices, ...(data as Prices) };
  } catch { /* pas disponible en dev local */ }

  // Fallback filesystem (dev local)
  try {
    const raw = fs.readFileSync(PRICES_FILE, "utf-8");
    return { ...defaultPrices, ...JSON.parse(raw) };
  } catch {
    return defaultPrices;
  }
}

export function getPrices(): Prices {
  try {
    const raw = fs.readFileSync(PRICES_FILE, "utf-8");
    return { ...defaultPrices, ...JSON.parse(raw) };
  } catch {
    return defaultPrices;
  }
}

export async function savePricesAsync(prices: Prices): Promise<void> {
  // Essaye Blobs (Netlify production)
  try {
    const store = getStore(STORE_NAME);
    await store.setJSON(BLOB_KEY, prices);
    return;
  } catch { /* pas disponible en dev local */ }

  // Fallback filesystem (dev local uniquement)
  if (!process.env.NETLIFY) {
    fs.writeFileSync(PRICES_FILE, JSON.stringify(prices, null, 2));
    return;
  }

  throw new Error("Blobs non disponible sur Netlify — vérifie [[stores]] dans netlify.toml");
}

export function savePrices(prices: Prices): void {
  fs.writeFileSync(PRICES_FILE, JSON.stringify(prices, null, 2));
}

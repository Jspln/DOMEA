import fs from "fs";
import path from "path";
import { getStore } from "@netlify/blobs";

const PRICES_FILE = path.join(process.cwd(), "src/data/prices.json");
const BLOB_KEY = "prices";

export type Prices = Record<string, number>;

export const defaultPrices: Prices = {
  "entretien-regulier": 28,
  "grand-menage": 32,
  blanchisserie: 26,
  organisation: 35,
  jardinage: 30,
};

const isNetlify = Boolean(process.env.NETLIFY || process.env.NETLIFY_LOCAL);

export async function getPricesAsync(): Promise<Prices> {
  if (isNetlify) {
    try {
      const store = getStore("domea-prices");
      const data = await store.get(BLOB_KEY, { type: "json" });
      if (data && typeof data === "object") return { ...defaultPrices, ...(data as Prices) };
    } catch { /* first run */ }
    return defaultPrices;
  }
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
  if (isNetlify) {
    const store = getStore("domea-prices");
    await store.setJSON(BLOB_KEY, prices);
    return;
  }
  fs.writeFileSync(PRICES_FILE, JSON.stringify(prices, null, 2));
}

export function savePrices(prices: Prices): void {
  fs.writeFileSync(PRICES_FILE, JSON.stringify(prices, null, 2));
}

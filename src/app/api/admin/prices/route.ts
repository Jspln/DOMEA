import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken, COOKIE_NAME } from "@/lib/admin-auth";
import { getPricesAsync, savePricesAsync, type Prices } from "@/lib/prices";

async function requireAuth() {
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;
  return verifyToken(token);
}

export async function GET() {
  if (!(await requireAuth())) {
    return NextResponse.json({ ok: false, error: "Non autorisé." }, { status: 401 });
  }
  const prices = await getPricesAsync();
  return NextResponse.json({ ok: true, prices });
}

export async function PUT(request: Request) {
  if (!(await requireAuth())) {
    return NextResponse.json({ ok: false, error: "Non autorisé." }, { status: 401 });
  }

  let body: { prices?: Prices };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Requête invalide." }, { status: 400 });
  }

  if (!body.prices || typeof body.prices !== "object") {
    return NextResponse.json({ ok: false, error: "Données invalides." }, { status: 422 });
  }

  const sanitized: Prices = {};
  for (const [key, val] of Object.entries(body.prices)) {
    const n = Number(val);
    if (!isNaN(n) && n > 0) sanitized[key] = n;
  }

  try {
    await savePricesAsync(sanitized);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Impossible de sauvegarder." },
      { status: 500 },
    );
  }
}

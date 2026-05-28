import crypto from "crypto";

const SECRET = process.env.ADMIN_SECRET ?? "domea-dev-secret-change-me";
const TTL_MS = 24 * 60 * 60 * 1000; // 24 heures

export function createToken(): string {
  const exp = Date.now() + TTL_MS;
  const payload = `admin:${exp}`;
  const sig = crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
  return `${Buffer.from(payload).toString("base64url")}.${sig}`;
}

export function verifyToken(token: string | undefined): boolean {
  if (!token) return false;
  try {
    const [b64, sig] = token.split(".");
    if (!b64 || !sig) return false;
    const payload = Buffer.from(b64, "base64url").toString();
    const expected = crypto
      .createHmac("sha256", SECRET)
      .update(payload)
      .digest("hex");
    if (sig !== expected) return false;
    const exp = parseInt(payload.split(":")[1] ?? "0", 10);
    return exp > Date.now();
  } catch {
    return false;
  }
}

export const COOKIE_NAME = "domea_admin";

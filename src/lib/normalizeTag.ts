import { tagAlias } from "./tagAlias";

export function normalizeTag(tag: string) {
  const lower = tag.trim();
  return tagAlias[lower] ?? lower.toLowerCase();
}

import englishContent from "./en-US.json";
import portugueseContent from "./pt-BR.json";
import type { Language } from "./language";

export type { Language } from "./language";

export const portfolioContent = {
  "pt-BR": portugueseContent,
  "en-US": englishContent,
} satisfies Record<Language, typeof portugueseContent>;

import type { Locale } from "./ui";

export type Translation<T> = {
  [key in Locale]: T;
};

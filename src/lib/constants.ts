import HEX from "./HEX.ts";
import HSL from "./HSL.ts";
import RGB from "./RGB.ts";
import type { RGBColor } from "./RGB.ts";
import type { HEXColor } from "./HEX.ts";
import type { HSLColor } from "./HSL.ts";

export const DEFAULT_PALETTE_SIZE = 6;

export const DIFFICULTY_MAP = {
  easy: [100, 20],
  medium: [50, 20],
  hard: [30, 20],
};

export const FORMAT_MAP = {
  rgb: RGB,
  hex: HEX,
  hsl: HSL,
};

export type Format = keyof typeof FORMAT_MAP;
export type Difficulty = keyof typeof DIFFICULTY_MAP;

export type Color = RGBColor | HEXColor | HSLColor;

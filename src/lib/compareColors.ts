import type { Color } from "./constants.ts";

export default function compareColors(colorA: Color, colorB: Color): boolean {
  return [...colorA].every((element, index) => colorB[index] === element);
}

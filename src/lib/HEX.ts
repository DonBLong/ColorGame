import RGB from "./RGB.ts";
import type { RGBColor } from "./RGB.ts";

export type HEXColor = `#${number}`;

export default class HEX extends RGB {
  static override toCSS(color: RGBColor): string {
    const colorHex = color.map(element => element.toString(16));
    return `#${colorHex.join("")}`;
  }
}

import { randomBetween } from "../../../utils/lib/numbers/randomBetween.ts";
import { randomCloseTo } from "../../../utils/lib/numbers/randomCloseTo.ts";

export type RGBColor = [red: number, green: number, blue: number];

interface PaletteRGB {
  colors: RGBColor[];
  colorPosition: number;
}

export default class RGB {
  static readonly MAX = 255;
  static readonly MIN = 0;

  static generateRandom(): RGBColor {
    const red = randomBetween(this.MAX, this.MIN);
    const green = randomBetween(this.MAX, this.MIN);
    const blue = randomBetween(this.MAX, this.MIN);
    return [red, green, blue];
  }

  static toCSS(color: RGBColor): string {
    return `rgb(${color.join(", ")})`;
  }

  static createPalette(
    size: number,
    color: RGBColor,
    maxOffsetPercentage: number = 100,
    minOffsetPercentage: number = 0,
    colorPosition: "random" | number = "random"
  ): PaletteRGB {
    const colors: RGBColor[] = [];
    for (let index = 0; index < size; index++) {
      colors.push([
        ...this.#generateeSimilar(
          color,
          maxOffsetPercentage,
          minOffsetPercentage
        ),
      ]);
    }
    colorPosition =
      typeof colorPosition === "number"
        ? colorPosition
        : randomBetween(0, size);
    colors[colorPosition] = color;
    return { colors, colorPosition };
  }

  static #generateeSimilar(
    color: RGBColor,
    maxOffsetPercentage: number = 100,
    minOffsetPercentage: number = 0
  ): RGBColor {
    const [red, green, blue] = color;
    const newRed = randomCloseTo(
      red,
      this.MAX,
      this.MIN,
      maxOffsetPercentage,
      minOffsetPercentage
    );
    const newGreen = randomCloseTo(
      green,
      this.MAX,
      this.MIN,
      maxOffsetPercentage,
      minOffsetPercentage
    );
    const newBlue = randomCloseTo(
      blue,
      this.MAX,
      this.MIN,
      maxOffsetPercentage,
      minOffsetPercentage
    );
    return [newRed, newGreen, newBlue];
  }
}

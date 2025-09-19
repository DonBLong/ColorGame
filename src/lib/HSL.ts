import { randomBetween } from "../../../utils/lib/numbers/randomBetween.ts";
import { randomCloseTo } from "../../../utils/lib/numbers/randomCloseTo.ts";

export type HSLColor = [hue: number, saturation: number, lightness: number];

export default class HSL {
  static readonly HUE_MAX = 360;
  static readonly HUE_MIN = 0;
  static readonly SATURATION_MAX = 100;
  static readonly SATURATION_MIN = 0;
  static readonly LIGHTNESS_MAX = 100;
  static readonly LIGHTNESS_MIN = 0;

  static generateRandom(): HSLColor {
    const hue = randomBetween(this.HUE_MAX, this.HUE_MIN);
    const saturation = randomBetween(this.SATURATION_MAX, this.SATURATION_MIN);
    const lightness = randomBetween(this.LIGHTNESS_MAX, this.LIGHTNESS_MIN);
    return [hue, saturation, lightness];
  }

  static toCSS(color: HSLColor): string {
    const [hue, saturation, lightness] = color;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  static createPalette(
    size: number,
    color: HSLColor,
    maxOffsetPercentage: number = 100,
    minOffsetPercentage: number = 0,
    colorPosition: "random" | number = "random"
  ) {
    const colors: HSLColor[] = [];
    for (let index = 0; index < size; index++) {
      colors.push([
        ...this.#generateSimilar(
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

  static #generateSimilar(
    color: HSLColor,
    maxOffsetPercentage: number = 100,
    minOffsetPercentage: number = 0
  ): HSLColor {
    const [hue, saturation, lightness] = color;
    const newHue = randomCloseTo(
      hue,
      this.HUE_MAX,
      this.HUE_MIN,
      maxOffsetPercentage,
      minOffsetPercentage
    );
    const newSaturation = randomCloseTo(
      saturation,
      this.SATURATION_MAX,
      this.SATURATION_MIN,
      maxOffsetPercentage,
      minOffsetPercentage
    );
    const newLightness = randomCloseTo(
      lightness,
      this.LIGHTNESS_MAX,
      this.LIGHTNESS_MIN,
      maxOffsetPercentage,
      minOffsetPercentage
    );
    return [newHue, newSaturation, newLightness];
  }
}

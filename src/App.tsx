import { useState } from "react";
import "./App.css";
import ColorText from "./components/ColorText.tsx";
import Header from "./components/Header.tsx";
import Settings from "./components/Settings.tsx";
import {
  DEFAULT_PALETTE_SIZE,
  DIFFICULTY_MAP,
  FORMAT_MAP,
} from "./lib/constants.ts";
import type { Difficulty, Format } from "./lib/constants.ts";
import Next from "./components/Next.tsx";
import ColorPalette from "./components/ColorPalette.tsx";
import Feedback from "./components/Feedback.tsx";
import compareColors from "./lib/compareColors.ts";
import type RGB from "./lib/RGB.ts";
import type HEX from "./lib/HEX.ts";
import type HSL from "./lib/HSL.ts";

type ColorClass = typeof RGB | typeof HEX | typeof HSL;

export default function App() {
  let ColorClass: ColorClass = FORMAT_MAP["rgb"];

  const [color, setColor] = useState(ColorClass.generateRandom());
  const [format, setFormat] = useState("rgb" as Format);
  const [colorCSS, setColorCSS] = useState(ColorClass.toCSS(color));
  const [difficulty, setDifficulty] = useState("easy" as Difficulty);
  const [palette, setPalette] = useState(
    ColorClass.createPalette(
      DEFAULT_PALETTE_SIZE,
      color,
      ...DIFFICULTY_MAP[difficulty]
    )
  );
  const [selectedColorIndex, setSelectedColorIndex] = useState(-1);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  function changeColor() {
    setSelectedColorIndex(-1);
    const newColor = ColorClass.generateRandom();
    setColor(newColor);
    setPalette(
      ColorClass.createPalette(
        DEFAULT_PALETTE_SIZE,
        newColor,
        ...DIFFICULTY_MAP[difficulty]
      )
    );
  }

  function changeFormat(format: Format) {
    setFormat(format);
    ColorClass = FORMAT_MAP[format];
    setColorCSS(ColorClass.toCSS(color));
  }

  function changeDifficulty(difficulty: Difficulty) {
    setSelectedColorIndex(-1);
    setDifficulty(difficulty);
    const newColor = ColorClass.generateRandom();
    setColor(newColor);
    setPalette(
      ColorClass.createPalette(
        DEFAULT_PALETTE_SIZE,
        newColor,
        ...DIFFICULTY_MAP[difficulty]
      )
    );
  }

  function selectColor(index: number) {
    setSelectedColorIndex(index);
    setIsAnswerCorrect(
      compareColors(
        palette.colors[index],
        palette.colors[palette.colorPosition]
      )
    );
  }

  return (
    <>
      <Header text="Color Game" />
      <ColorText color={colorCSS} />
      <Settings
        difficulty={difficulty}
        format={format}
        onDifficultyChange={changeDifficulty}
        onFormatChange={changeFormat}
      />
      <ColorPalette
        colors={palette.colors.map(color => ColorClass.toCSS(color))}
        selectedColorIndex={selectedColorIndex}
        correctColorIndex={palette.colorPosition}
        onSelectColor={selectColor}
      />
      {selectedColorIndex > -1 && (
        <Feedback isAnswerCorrect={isAnswerCorrect} />
      )}
      {selectedColorIndex > -1 && <Next onClick={changeColor} />}
    </>
  );
}

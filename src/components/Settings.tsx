import type { Difficulty, Format } from "../lib/constants.ts";
import Fieldset from "./FieldSet.tsx";
import type { RadioProps } from "./Radio.tsx";

export interface ChoicesProps {
  format: Format;
  difficulty: Difficulty;
  onFormatChange: (format: Format) => void;
  onDifficultyChange: (difficulty: Difficulty) => void;
}

export default function Choices({
  format,
  difficulty,
  onFormatChange,
  onDifficultyChange,
}: ChoicesProps) {
  const formatRadioProps: Omit<RadioProps<Format>, "name">[] = [
    {
      id: "rgb",
      label: "RGB",
      checked: format === "rgb",
      onChange: onFormatChange,
    },
    {
      id: "hex",
      label: "Hex",
      checked: format === "hex",
      onChange: onFormatChange,
    },
    {
      id: "hsl",
      label: "HSL",
      checked: format === "hsl",
      onChange: onFormatChange,
    },
  ];
  const difficultyRadioProps: Omit<RadioProps<Difficulty>, "name">[] = [
    {
      id: "easy",
      label: "Easy",
      checked: difficulty === "easy",
      onChange: onDifficultyChange,
    },
    {
      id: "medium",
      label: "Medium",
      checked: difficulty === "medium",
      onChange: onDifficultyChange,
    },
    {
      id: "hard",
      label: "Hard",
      checked: difficulty === "hard",
      onChange: onDifficultyChange,
    },
  ];
  return (
    <section className="choices">
      <form>
        <Fieldset
          legend="Format"
          radioGroupProps={{
            name: "format",
            radioProps: [...formatRadioProps],
          }}
        />
        <Fieldset
          legend="Difficulty"
          radioGroupProps={{
            name: "difficulty",
            radioProps: [...difficultyRadioProps],
          }}
        />
      </form>
    </section>
  );
}

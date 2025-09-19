import ColorPlate from "./ColorPlate.tsx";

export interface ColorPaletteProps {
  colors: string[];
  selectedColorIndex: number;
  correctColorIndex: number;
  onSelectColor: (index: number) => void;
}

export default function ColorPalette({
  colors,
  selectedColorIndex,
  correctColorIndex,
  onSelectColor,
}: ColorPaletteProps) {
  return (
    <section className="color-palette">
      {colors.map((color, index) => (
        <ColorPlate
          key={index}
          index={index}
          backgroundColor={color}
          selected={selectedColorIndex === index}
          highlighted={selectedColorIndex > -1 && correctColorIndex === index}
          onClick={selectedColorIndex <= -1 ? onSelectColor : undefined}
        />
      ))}
    </section>
  );
}

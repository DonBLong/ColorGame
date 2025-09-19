export interface ColorPlateProps {
  index: number;
  backgroundColor: string;
  selected: boolean;
  highlighted: boolean;
  onClick?: (index: number) => void;
}

export default function ColorPlate({
  index,
  backgroundColor,
  selected,
  highlighted,
  onClick,
}: ColorPlateProps) {
  function handleClick() {
    onClick?.(index);
  }
  return (
    <div className="color-plate">
      <button
        type="button"
        style={{
          backgroundColor,
          outline: `${
            selected || highlighted
              ? `5px solid ${highlighted ? "orange" : ""}`
              : "none"
          }`,
        }}
        onClick={handleClick}
      ></button>
    </div>
  );
}

import Button, { type ButtonProps } from "./Button.tsx";

export type NextProps = Pick<ButtonProps, "onClick">;

export default function Next({ onClick }: NextProps) {
  return (
    <section className="next">
      <Button text="Next Color" onClick={onClick} />
    </section>
  );
}

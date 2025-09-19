import type { ChangeEvent } from "react";

export interface RadioProps<Value extends string> {
  name: string;
  id: string;
  label: string;
  checked: boolean;
  onChange: (value: Value) => void;
}

export default function Radio<Value extends string>({
  name,
  id,
  label,
  checked,
  onChange,
}: RadioProps<Value>) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    onChange(value as Value);
  }
  return (
    <div className="radio">
      <input
        type="radio"
        name={name}
        id={`${id}-radio`}
        value={id}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={`${id}-radio`}>{label}</label>
    </div>
  );
}

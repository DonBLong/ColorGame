import RadioGroup, { type RadioGroupProps } from "./RadioGroup.tsx";

export interface FieldsetProps<Value extends string> {
  legend: string;
  radioGroupProps: RadioGroupProps<Value>;
}

export default function Fieldset<Value extends string>({
  legend,
  radioGroupProps,
}: FieldsetProps<Value>) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <RadioGroup {...radioGroupProps} />
    </fieldset>
  );
}

import type { RadioProps } from "./Radio.tsx";
import Radio from "./Radio.tsx";

export interface RadioGroupProps<Value extends string> {
  name: string;
  radioProps: Omit<RadioProps<Value>, "name">[];
}

export default function RadioGroup<Value extends string>({
  name,
  radioProps,
}: RadioGroupProps<Value>) {
  return (
    <div className="radio-group">
      {radioProps.map((prop, index) => (
        <Radio key={index} {...{ name, ...prop }} />
      ))}
    </div>
  );
}

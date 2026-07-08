import type { Option } from "../types";

type RadioOptionProps = {
  option: Option;
  questionId: string;
  checked: boolean;
  onChange: (optionId: string) => void;
};

export function RadioOption({ option, questionId, checked, onChange }: RadioOptionProps) {
  const textParts = option.text.split("→");

  return (
    <label
      className={`flex min-h-[58px] cursor-pointer items-center gap-4 rounded border px-5 py-4 text-left font-travels text-[18px] leading-[1.2] text-ink transition focus-within:ring-2 focus-within:ring-blueCta/30 ${
        checked ? "border-blueCta bg-blueCta/[0.06]" : "border-ink/20 bg-white hover:border-ink/50"
      }`}
    >
      <input
        className="peer sr-only"
        type="radio"
        name={questionId}
        value={option.id}
        checked={checked}
        onChange={() => onChange(option.id)}
      />
      <span
        className={`grid size-[18px] shrink-0 place-items-center rounded border ${
          checked ? "border-blueCta bg-blueCta" : "border-ink/50"
        }`}
        aria-hidden="true"
      >
        <span className={`size-2 rounded-sm bg-white ${checked ? "opacity-100" : "opacity-0"}`} />
      </span>
      <span>
        {textParts.map((part, index) => (
          <span key={`${option.id}-${index}`}>
            {part}
            {index < textParts.length - 1 ? <span className="font-sans">→</span> : null}
          </span>
        ))}
      </span>
    </label>
  );
}

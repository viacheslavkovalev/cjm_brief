type ProgressBarProps = {
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-ink/15" aria-hidden="true">
      <div className="h-full rounded-full bg-accent transition-[width] duration-[400ms]" style={{ width: `${value}%` }} />
    </div>
  );
}

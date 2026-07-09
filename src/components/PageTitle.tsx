type PageTitleProps = {
  className?: string;
};

export function PageTitle({ className = "" }: PageTitleProps) {
  return (
    <div className={`relative left-1/2 w-[calc(100vw-40px)] min-w-0 max-w-[720px] -translate-x-1/2 text-center md:left-auto md:w-full md:translate-x-0 ${className}`}>
      <h1 className="mx-auto w-full min-w-0 text-center font-travelsNext text-[clamp(22px,6.6vw,34px)] font-extrabold uppercase leading-[0.95] text-ink [overflow-wrap:anywhere] md:text-[40px]">
        Экспресс-диагностика пути покупателя
      </h1>
    </div>
  );
}

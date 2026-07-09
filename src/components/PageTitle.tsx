type PageTitleProps = {
  className?: string;
};

export function PageTitle({ className = "" }: PageTitleProps) {
  return (
    <div className={`relative left-1/2 w-[calc(100vw-40px)] min-w-0 max-w-[720px] -translate-x-1/2 text-center md:left-auto md:w-full md:translate-x-0 ${className}`}>
      <h1 className="mx-auto w-full min-w-0 text-center font-travelsNext text-[18px] font-extrabold uppercase leading-[0.95] text-ink [overflow-wrap:anywhere] min-[380px]:text-[20px] sm:text-[34px] md:text-[40px]">
        <span className="block break-words text-center sm:hidden">Экспресс-</span>
        <span className="block break-words text-center sm:hidden">диагностика</span>
        <span className="mx-auto hidden w-max max-w-full whitespace-nowrap text-center sm:block">Экспресс-диагностика</span>
        <span className="mx-auto block text-center">пути покупателя</span>
      </h1>
    </div>
  );
}

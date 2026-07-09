type PageTitleProps = {
  className?: string;
};

export function PageTitle({ className = "" }: PageTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="mx-auto max-w-[620px] font-travelsNext text-[27px] font-bold uppercase leading-[0.95] text-ink sm:text-[34px] md:text-[40px]">
        <span className="block whitespace-nowrap">Экспресс-диагностика</span>
        <span className="block">пути покупателя</span>
      </h1>
    </div>
  );
}

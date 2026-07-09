type PageTitleProps = {
  className?: string;
};

export function PageTitle({ className = "" }: PageTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="mx-auto w-full max-w-[720px] text-center font-travelsNext text-[24px] font-extrabold uppercase leading-[0.95] text-ink min-[380px]:text-[27px] sm:text-[34px] md:text-[40px]">
        <span className="mx-auto block w-max max-w-full whitespace-nowrap text-center">Экспресс-диагностика</span>
        <span className="mx-auto block text-center">пути покупателя</span>
      </h1>
    </div>
  );
}

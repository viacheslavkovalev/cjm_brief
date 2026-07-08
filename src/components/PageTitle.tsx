import { publicAsset } from "../utils/assets";

type PageTitleProps = {
  className?: string;
};

export function PageTitle({ className = "" }: PageTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="mx-auto max-w-[560px] font-travelsNext text-[28px] font-bold uppercase leading-none text-ink sm:text-[34px] md:text-[42px]">
        Экспресс-диагностика пути покупателя
      </h1>
      <img className="mx-auto mt-4 w-full max-w-[420px]" src={publicAsset("images/hightlight.svg")} alt="" aria-hidden="true" />
    </div>
  );
}

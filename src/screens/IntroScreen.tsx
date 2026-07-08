import { Button } from "../components/Button";
import { PageTitle } from "../components/PageTitle";
import { ScreenShell } from "../components/ScreenShell";

type IntroScreenProps = {
  onStart: () => void;
};

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <ScreenShell className="items-center text-center">
      <section className="flex flex-1 flex-col items-center">
        <PageTitle className="mt-10 md:mt-14" />

        <div className="mt-8 w-full max-w-[640px] space-y-5 rounded-xl bg-white px-5 py-6 text-left font-travels text-[18px] leading-[1.25] text-ink shadow-soft md:px-8 md:py-8">
          <p className="text-center font-bold text-accent">Сезон почти закончился — подводим итоги</p>
          <p>
            Целых три месяца мы вместе собирали путь покупателя: прошли все этапы от латентного спроса до
            сервиса после продаж, собрали карту из 28 барьеров на пути клиента и нашли места, где могут
            теряться лиды.
          </p>
          <p>
            На встречах нас часто спрашивали, как применить эту механику на процессы компаний, — поэтому мы
            собрали небольшой тест для проверки вашей воронки.
          </p>
          <p>
            Здесь будет 10 вопросов (по одному на каждый этап), так что тест займет всего 5 минут.
          </p>
        </div>

        <p className="mt-8 font-travels text-[18px] font-medium text-ink">Пройдите, чтобы узнать свой результат ↓</p>
        <Button className="mt-4 w-full max-w-[640px]" type="button" onClick={onStart}>
          Пройти тест — 5 минут
        </Button>
      </section>
    </ScreenShell>
  );
}

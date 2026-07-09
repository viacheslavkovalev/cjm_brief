import { Button } from "../components/Button";
import { PageTitle } from "../components/PageTitle";
import { ScreenShell } from "../components/ScreenShell";

type IntroScreenProps = {
  onStart: () => void;
};

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <ScreenShell className="items-center text-center">
      <section className="flex w-full min-w-0 flex-1 flex-col items-center">
        <PageTitle className="mt-10 md:mt-14" />

        <div className="mt-8 w-[calc(100vw-40px)] min-w-0 max-w-[640px] space-y-5 text-left font-travels text-[16px] leading-[1.25] text-ink [overflow-wrap:anywhere] md:text-[18px]">
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

        <Button className="mt-10 w-[calc(100vw-40px)] max-w-[640px] whitespace-normal px-4 text-[15px] [overflow-wrap:anywhere] md:mt-12 md:px-8 md:text-base" type="button" onClick={onStart}>
          Пройдите, чтобы узнать свой результат
        </Button>
      </section>
    </ScreenShell>
  );
}

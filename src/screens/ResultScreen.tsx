import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { PageTitle } from "../components/PageTitle";
import { ScreenShell } from "../components/ScreenShell";
import { ctaUrl } from "../data/results";
import type { Result } from "../types";
import { publicAsset } from "../utils/assets";

type ResultScreenProps = {
  result: Result;
  score: number;
  maxScore: number;
};

export function ResultScreen({ result, score }: ResultScreenProps) {
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [showCta]);

  if (showCta) {
    return (
      <ScreenShell className="items-center text-center">
        <section className="flex flex-1 flex-col items-center justify-center py-10">
          <div className="w-full max-w-[760px] rounded-xl bg-white px-5 py-7 text-left text-ink shadow-soft md:px-9 md:py-9">
            <div className="grid gap-5 md:grid-cols-[132px_1fr] md:items-center">
              <img
                className="mx-auto size-[132px] rounded-full object-cover md:mx-0"
                src={publicAsset("images/cjm_photo.png")}
                alt=""
                loading="lazy"
              />
              <p className="font-travels text-[21px] font-medium leading-[1.15] text-accent md:text-[26px]">
                {result.action}
              </p>
            </div>
            <div className="mt-7 grid gap-5 font-travels text-[18px] leading-[1.3] text-ink/75">
              {result.ctaBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {ctaUrl ? (
            <a className="mt-6 w-full max-w-[760px]" href={ctaUrl} target="_blank" rel="noreferrer">
              <Button className="w-full" type="button">
                {result.ctaText}
              </Button>
            </a>
          ) : (
            <Button className="mt-6 w-full max-w-[760px]" type="button" disabled>
              {result.ctaText}
            </Button>
          )}
        </section>
      </ScreenShell>
    );
  }

  return (
    <ScreenShell>
      <section className="flex flex-1 flex-col items-center">
        <PageTitle className="mt-8 md:mt-12" />

        <div className="mt-8 w-full max-w-[640px] rounded-xl bg-white px-5 py-7 text-ink shadow-soft md:px-9 md:py-9">
          <div className="flex items-baseline justify-between gap-4 font-travels text-[20px] font-bold leading-[1.2] text-accent md:text-[24px]">
            <p className="text-left">Ваш результат:</p>
            <p className="text-right uppercase">{score} БАЛЛОВ</p>
          </div>

          <h1 className="mt-8 font-travelsNext text-[32px] font-bold uppercase leading-none md:text-[48px]">
            {result.title}
          </h1>

          <div className="mt-7 grid gap-5 font-travels text-[18px] leading-[1.3] text-ink/80">
            <p>{result.diagnosis}</p>
            <p>
              <span className="font-bold text-ink">Где теряете. </span>
              {result.losses}
            </p>
          </div>
        </div>

        <Button className="mt-6 w-full max-w-[640px]" type="button" onClick={() => setShowCta(true)}>
          Что с этим делать?
        </Button>
      </section>
    </ScreenShell>
  );
}

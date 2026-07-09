import { FormEvent, useMemo, useState } from "react";
import { Button } from "../components/Button";
import { PageTitle } from "../components/PageTitle";
import { ScreenShell } from "../components/ScreenShell";

type ContactScreenProps = {
  initialName: string;
  initialCompany: string;
  initialPosition: string;
  initialPhone: string;
  onSubmit: (contact: { name: string; company: string; position: string; phone: string }) => void;
};

export function ContactScreen({
  initialName,
  initialCompany,
  initialPosition,
  initialPhone,
  onSubmit,
}: ContactScreenProps) {
  const [name, setName] = useState(initialName);
  const [company, setCompany] = useState(initialCompany);
  const [position, setPosition] = useState(initialPosition);
  const [phone, setPhone] = useState(initialPhone);
  const [accepted, setAccepted] = useState(false);
  const valid = useMemo(
    () =>
      name.trim().length > 1 &&
      company.trim().length > 1 &&
      position.trim().length > 1 &&
      phone.trim().length > 4 &&
      accepted,
    [accepted, company, name, phone, position],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (valid) {
      onSubmit({
        name: name.trim(),
        company: company.trim(),
        position: position.trim(),
        phone: phone.trim(),
      });
    }
  }

  return (
    <ScreenShell>
      <form className="flex flex-1 flex-col items-center" onSubmit={handleSubmit} noValidate>
        <PageTitle className="mt-8" />

        <section className="mt-10 w-full max-w-[620px] rounded-xl bg-white px-5 py-6 text-ink shadow-soft md:px-9 md:py-8">
          <h2 className="font-travelsNext text-[30px] font-bold uppercase leading-none md:text-[40px]">
            Тест пройден! Остался 1 шаг до результата
          </h2>
          <p className="mt-5 font-travels text-[18px] leading-[1.25] text-ink/75">
            Оставьте контакт — и сразу покажем, на каких этапах воронки вы теряете покупателей.
          </p>

          <div className="mt-7 grid gap-5">
            <TextField label="Имя, фамилия" value={name} onChange={setName} />
            <TextField label="Компания" value={company} onChange={setCompany} />
            <TextField label="Должность" value={position} onChange={setPosition} />
            <TextField label="Телефон" value={phone} type="tel" onChange={setPhone} />
          </div>

          <label className="mt-6 flex cursor-pointer items-start gap-3 font-travels text-sm leading-[1.25] text-ink/70">
            <input
              className="mt-0.5 size-4 shrink-0 accent-accent"
              type="checkbox"
              checked={accepted}
              onChange={(event) => setAccepted(event.target.checked)}
              required
            />
            <a
              className="text-blueCta underline underline-offset-2"
              href="https://bureausuchkov.com/documents/policy"
              target="_blank"
              rel="noreferrer"
            >
              согласия на обработку персональных данных
            </a>
          </label>
        </section>

        <Button className="mt-6 w-full max-w-[620px]" type="submit" disabled={!valid}>
          перейти к результатам
        </Button>
      </form>
    </ScreenShell>
  );
}

type TextFieldProps = {
  label: string;
  value: string;
  type?: string;
  onChange: (value: string) => void;
};

function TextField({ label, value, type = "text", onChange }: TextFieldProps) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label className="block font-travels text-[18px] leading-[1.2] text-ink" htmlFor={id}>
      {label}
      <input
        className="mt-2 h-[52px] w-full rounded border border-ink/20 bg-white px-4 font-travels text-base text-ink outline-none transition placeholder:text-[#A4A4A4] focus:border-blueCta focus:ring-2 focus:ring-blueCta/20"
        id={id}
        type={type}
        inputMode={type === "tel" ? "tel" : undefined}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

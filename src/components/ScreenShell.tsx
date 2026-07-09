import type { PropsWithChildren } from "react";
import { Logo } from "./Logo";
import { publicAsset } from "../utils/assets";

type ScreenShellProps = PropsWithChildren<{
  className?: string;
}>;

export function ScreenShell({ children, className = "" }: ScreenShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-page px-5 py-6 text-ink md:px-10 md:py-8">
      <img
        className="pointer-events-none absolute left-1/2 top-[260px] w-[780px] max-w-none -translate-x-1/2 opacity-20 md:top-[300px] md:w-[920px]"
        src={publicAsset("images/cjm_background.png")}
        alt=""
        aria-hidden="true"
      />
      <div className={`relative z-10 mx-auto flex min-h-[calc(100vh-48px)] w-full max-w-[760px] flex-col ${className}`}>
        <Logo />
        {children}
      </div>
    </main>
  );
}

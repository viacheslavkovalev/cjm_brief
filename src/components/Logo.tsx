import { publicAsset } from "../utils/assets";

export function Logo() {
  return (
    <img
      className="mx-auto h-auto w-[123px] brightness-0"
      src={publicAsset("images/logo_bureau.svg")}
      alt="Bureau"
      width="123"
      height="37"
    />
  );
}

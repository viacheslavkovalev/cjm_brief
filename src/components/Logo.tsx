import { publicAsset } from "../utils/assets";

export function Logo() {
  return (
    <img
      className="mx-auto h-auto w-[155px] md:w-[195px]"
      src={publicAsset("images/logo.svg")}
      alt="Bureau"
      width="195"
      height="59"
    />
  );
}

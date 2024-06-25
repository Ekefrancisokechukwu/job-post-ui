import { popins } from "../fonts";

export const Heading = ({ text }) => {
  return (
    <h1
      className={`text-[#6E6D6D] text-sm font-medium leading-[18.9px] ${popins.className}`}
    >
      {text}
    </h1>
  );
};

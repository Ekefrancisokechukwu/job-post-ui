import Image from "next/image";
import { CheveronDownIcon } from "../icons";

export const ProfileButton = () => {
  return (
    <div>
      <button className="flex items-center gap-x-2 py-1 px-2 rounded-xl hover:bg-gray-100 duration-500 transition">
        <Image
          src={"/profileImg.png"}
          alt="profile image"
          width={33}
          height={33}
        />
        <CheveronDownIcon />
      </button>
    </div>
  );
};

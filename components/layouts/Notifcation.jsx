import { BellIcon } from "../icons";

export const Notification = () => {
  return (
    <div>
      <button className="flex items-center  duration-500 transition hover:bg-gray-100 p-1 rounded-xl">
        <div className="relative">
          <BellIcon />
          <span className="bg-primary-color size-[6px] rounded-full absolute top-0 right-1" />
        </div>
      </button>
    </div>
  );
};

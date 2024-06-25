import { EditIcon, TrashIcon } from "@/components/icons";

export const ActionButtons = () => {
  return (
    <div className="flex items-center gap-x-3 justify-center">
      <button className="flex border hover:scale-105 transition-all duration-300 active:scale-95 border-primary-color px-6 text-sm py-2 text-primary-color rounded-lg bg-[#FEF4F2] items-center gap-x-[10px]">
        {" "}
        <TrashIcon /> Delete job
      </button>
      <button className="flex  hover:scale-105 transition-all duration-300  active:scale-95 items-center rounded-lg py-2 px-6 text-sm gap-x-[10px] bg-primary-color text-white">
        {" "}
        <EditIcon /> Edit job
      </button>
    </div>
  );
};

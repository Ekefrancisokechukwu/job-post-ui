import { inter } from "@/components/fonts";
import { CoinStackIcon, LocationPinIcon } from "@/components/icons";

export const JobPreview = () => {
  return (
    <>
      <div className="flex items-center gap-x-3">
        <h1 className="text-[#3D3D3D] font-semibold  text-[35px]">
          Senior Product Designer
        </h1>
        <span className="size-[4px] bg-[#D1D1D1] rounded-full block" />
        <span className="text-[#888888] text-sm">posted 2 days ago</span>
        <div
          className={`text-xs font-medium text-[#067647] border border-[#ABEFC6] rounded-full py-1 px-2 flex items-center gap-x-1 bg-[#ECFDF3] ${inter.className}`}
        >
          {" "}
          <span className="size-[6px] rounded-full bg-[#17B26A] inline-block" />
          Open
        </div>
      </div>
      <div className="mt-3 flex items-center gap-x-5">
        <div className="flex items-center gap-x-2">
          <LocationPinIcon />
          <span className="text-[#5D5D5D] font-medium leading-[27px]">
            Delaware, USA
          </span>
        </div>
        <span className="size-[4px] bg-[#D1D1D1] rounded-full block" />

        <div className="flex items-center gap-x-2">
          <CoinStackIcon />
          <span className="text-[#5D5D5D] font-medium leading-[27px]">
            $300k-$400k{" "}
          </span>
        </div>
      </div>
    </>
  );
};

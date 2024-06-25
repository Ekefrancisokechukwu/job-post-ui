import { popins } from "@/components/fonts";
import { Heading } from "@/components/ui";

export const AboutJob = () => {
  return (
    <div className={`${popins.className}`}>
      <Heading text={"About the job"} />
      <ol
        className={`list-decimal pl-3.5  mt-2 max-w-[526px] ${popins.className}`}
      >
        <li className=" text-[#3D3D3D] leading-[28px]">
          {" "}
          Handle the UI/UX research design
        </li>
        <li className=" text-[#3D3D3D] leading-[28px]">
          Work on researching on latest web applications designs & trends
        </li>
        <li className=" text-[#3D3D3D] leading-[28px]">
          Work on conceptualizing and visualizing{" "}
        </li>
        <li className=" text-[#3D3D3D] leading-[28px]">
          Work on creating graphics content and other graphic related works{" "}
        </li>
      </ol>
      <p className="text-[#3D3D3D] font-normal leading-[28px]">Benefits:</p>
      <div className="flex items-center text-[#3D3D3D] gap-x-3">
        <span className="size-[4px] rounded-full bg-[#3D3D3D]" />
        Health insurance
      </div>
      <div className="flex items-center text-[#3D3D3D] gap-x-3">
        <span className="size-[4px] rounded-full bg-[#3D3D3D]" />
        Provident Fund{" "}
      </div>
      <p className="text-[#3D3D3D] font-normal leading-[28px]">Schedule:</p>
      <div className="flex items-center text-[#3D3D3D] gap-x-3">
        <span className="size-[4px] rounded-full bg-[#3D3D3D]" />
        Day shift
      </div>
      <p className="text-[#3D3D3D] font-normal leading-[28px]">
        Supplemental pay types:
      </p>
      <div className="flex items-center text-[#3D3D3D] gap-x-3">
        <span className="size-[4px] rounded-full bg-[#3D3D3D]" />
        Performance bonus...
      </div>
    </div>
  );
};

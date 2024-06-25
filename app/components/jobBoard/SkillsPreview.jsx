import { popins } from "@/components/fonts";
import { AdobeIcon, AdobeXDIcon, FigmaIcon } from "@/components/icons";
import { Heading } from "@/components/ui";

export const SkillsPreview = () => {
  return (
    <div className="flex items-start gap-x-[8rem]">
      <div className="flex flex-col gap-y-3">
        <Heading text="Skills Required" />
        <div className="inline-flex  shadow-custom-inset max-w-max items-center gap-x-2 font-medium border border-[#D0D5DD] rounded-md text-[#344054] text-xs p-[4px_6px]">
          <FigmaIcon />
          Figma
        </div>
        <div className="inline-flex shadow-custom-inset  max-w-max items-center gap-x-2 font-medium border border-[#D0D5DD] rounded-md text-[#344054] text-xs p-[4px_6px]">
          <AdobeIcon />
          Adobe Illustrator
        </div>
        <div className="inline-flex shadow-custom-inset  max-w-max items-center gap-x-2 font-medium border border-[#D0D5DD] rounded-md text-[#344054] text-xs p-[4px_6px]">
          <AdobeXDIcon />
          Adobe XD
        </div>
      </div>

      <div>
        <Heading text="Preferred Language" />
        <p className={`text-[#3D3D3D] mt-2  ${popins.className}`}>English</p>
      </div>

      <div>
        <Heading text="Type" />
        <p className={`text-[#3D3D3D] mt-2  ${popins.className}`}>Full time</p>
      </div>

      <div>
        <Heading text="Years of Experience" />
        <p className={`text-[#3D3D3D] mt-2  ${popins.className}`}>
          3+ Years of Experience
        </p>
      </div>
    </div>
  );
};

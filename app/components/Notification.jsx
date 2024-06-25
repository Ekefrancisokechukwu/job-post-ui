import Image from "next/image";

export const Notification = () => {
  return (
    <div className="shadow-[-4px_8px_20px_0px_#0000001A] mt-6 p-[1.5rem] bg-white rounded-[12px]">
      <h1 className="text-[16px] text-black font-medium">
        “A quote from a Atlassian.”
      </h1>

      <div className="flex gap-x-4 mt-5 items-center">
        <Image src={"/Avatar.png"} alt="person" width={45} height={45} />
        <div className="">
          <p className="text-black font-medium">Name</p>
          <p className="text-[#828282]">Name</p>
        </div>
      </div>
    </div>
  );
};

import { EyeIcon, MessageIcon, UserIcon, Users } from "@/components/icons";

export const JobInfos = () => {
  return (
    <div className="mt-3">
      <ul className="*:text-sm *:text-[#4F4F4F] px-2 divide-y">
        <li className="flex py-5 items-center justify-between">
          <div className="flex items-center gap-x-3">
            <Users />
            Applicants
          </div>
          400
        </li>
        <li className="flex py-5 items-center justify-between">
          <div className="flex items-center gap-x-3">
            <UserIcon />
            Matches{" "}
          </div>
          100
        </li>
        <li className="flex py-5 items-center justify-between">
          <div className="flex items-center gap-x-3">
            <MessageIcon />
            Messages
          </div>
          147
        </li>
        <li className="flex py-5 items-center justify-between">
          <div className="flex items-center gap-x-3">
            <EyeIcon />
            Views
          </div>
          800
        </li>
      </ul>
    </div>
  );
};

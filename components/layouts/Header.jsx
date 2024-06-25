import { Nav } from "./Nav";
import { Notification } from "./Notifcation";
import { ProfileButton } from "./ProfileButton";

export const Header = () => {
  return (
    <header className="px-8 py-2 border-b flex items-center justify-between fixed top-0 w-full left-0 bg-white z-50">
      <button className="text-primary-color  font-bold inline-block leading-[27px] transition duration-500 p-[9px_20px] bg-[#E7E7E7] hover:bg-transparent border border-transparent hover:border-primary-color">
        Logo
      </button>
      <Nav />
      <div className="flex items-center gap-x-3">
        <Notification />
        <ProfileButton />
      </div>
    </header>
  );
};

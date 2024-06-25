"use client";

import Link from "next/link";
import { BriefcaseIcon, CoinsHandIcon, MessageIcon, UsersIcon } from "../icons";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    path: "/",
    text: "Jobs",
    icon: <BriefcaseIcon />,
  },
  {
    path: "/messages",
    text: "Messages",
    icon: (
      <div className="relative">
        {" "}
        <span className="bg-primary-color size-[6px] rounded-full absolute top-0 right-0" />
        <MessageIcon />
      </div>
    ),
  },
  {
    path: "/payments",
    text: "Payments",
    icon: <CoinsHandIcon />,
  },
  {
    path: "/application",
    text: "Application",
    icon: <UsersIcon />,
  },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="border rounded-[36px] p-2">
      <ul className="flex items-center gap-x-4">
        {navLinks.map((link, i) => {
          const activePath = pathname === link.path;

          return (
            <li key={i}>
              <Link
                href={link.path}
                className={`flex items-center border-2 text-sm font-medium    rounded-[49px] p-3 gap-x-2  ${
                  activePath
                    ? "bg-primary-color border-[#FCB4A5] text-white"
                    : "border-transparent hover:bg-gray-100 text-[#B0B0B0] hover:border-gray-200 transition duration-500 "
                }`}
              >
                <span>{link.icon}</span>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

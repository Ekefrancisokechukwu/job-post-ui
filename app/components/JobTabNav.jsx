"use client";

import { useState } from "react";

const tabs = [
  {
    tab: "job-preview",
    label: "Job preview",
  },
  {
    tab: "applicants",
    label: "Applicants",
  },
  {
    tab: "match",
    label: "Match",
  },
  {
    tab: "messages",
    label: "Messages",
  },
];

export const JobTabNav = () => {
  const [active, setActive] = useState("job-preview");

  return (
    <nav className="px-[4rem] border-b">
      <ul className="flex items-center gap-x-[72px] wrapper">
        {tabs.map((tab, i) => {
          return (
            <li key={i}>
              <button
                className={`inline-block py-4 hover:text-primary-color duration-500 transition relative font-medium   ${
                  active === tab.tab ? "text-primary-color " : "text-[#888888]"
                }`}
              >
                {tab.label}
                {active === tab.tab && (
                  <span className="absolute z-20 bottom-0 w-full h-[2px] bg-primary-color left-0" />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

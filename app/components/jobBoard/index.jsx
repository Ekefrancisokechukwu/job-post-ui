import { AboutJob } from "./AboutJob";
import { JobPreview } from "./JobPreview";
import { SkillsPreview } from "./SkillsPreview";

export const JobBoard = () => {
  return (
    <section>
      <div className="px-[4rem] py-7 border-b">
        <JobPreview />
      </div>
      <div className="px-[4rem] py-5 border-b">
        <SkillsPreview />
      </div>
      <div className="px-[4rem] py-5 ">
        <AboutJob />
      </div>
    </section>
  );
};

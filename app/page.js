import { Footer } from "@/components/layouts";
import { JobBoard, JobInfos, JobTabNav, Notification } from "./components";
import { ActionButtons } from "./components/ActionButtons";
import { popins } from "@/components/fonts";

export default function Home() {
  return (
    <main className="grid grid-cols-[1fr_auto] wrapper items-start">
      <div>
        <JobTabNav />
        <JobBoard />
        <Footer />
      </div>
      <div
        className={`w-[23rem] px-7 bg-[#FCFCFC] sticky top-[79.5px] sidebar-h  py-6 ${popins.className}`}
      >
        <ActionButtons />
        <JobInfos />
        <Notification />
      </div>
    </main>
  );
}

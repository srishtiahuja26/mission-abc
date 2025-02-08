// pages/index.tsx

import MafiaCard from "@/components/shared/MafiaCard";
import Start from "@/components/shared/Start";


export default function Home() {
  return (
    <div className="bg-[rgb(20,21,19)] text-white">
      {/* Navigation Bar */}
      <Start />

      <MafiaCard />

    </div>
  );
}

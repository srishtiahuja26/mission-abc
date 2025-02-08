// pages/index.tsx

import MafiaCard from "@/components/shared/MafiaCard";
import Start from "@/components/shared/Start";
import Stories from "@/components/shared/Stories";

import TruthPage from "@/components/shared/TruthPage";


export default function Home() {
  return (
    <div className=" w-full bg-[rgb(20,21,19)] text-white mt-50 min-h-screen">
      {/* <Start /> */} 

      <MafiaCard />
       <TruthPage  /> 
      <Stories />
    </div>
  );
}

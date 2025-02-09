// pages/index.tsx

import CatPrep from "@/components/shared/CatPrep";
import MafiaCard from "@/components/shared/MafiaCard";
import Start from "@/components/shared/Start";
import Stories from "@/components/shared/Stories";

import TruthPage from "@/components/shared/TruthPage";


export default function Home() {
  return (
    <div className=" w-full bg-[rgb(20,21,19)] text-white  min-h-screen">
      {/* <Start /> */} 

      <MafiaCard />
       <TruthPage  /> 
      <Stories />
      <CatPrep />
    </div>
  );
}

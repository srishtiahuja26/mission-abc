import Image from "next/image";
import NavBar from "./NavBar";
const Start = () => {
    return(
        <div className="bg-[rgb(20,21,19)] text-white">
        <div className="px-12 sm:px-4 lg:px-6 border-t border-l border-r border-yellow-800 m-12 h-screen bg-gradient-to-b from-[rgba(20,21,19)] via-[rgb(70,67,61)] to-[rgba(20,21,20)] rounded-lg ">
        <nav className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold font-qanleas-soft">
          {/* <p>mission</p> */}
            <Image
            src="/logo1.png"
            alt="Logo"
            width={50}
            height={50}
            />
            {/* <h5 className="font-bold ">ABC</h5> */}
        
          <NavBar />
        </div>

        <div>
          <button className="px-6 py-2 bg-yellow-500 rounded-lg font-semibold">
            Start Now
          </button>
        </div>
            </nav>

            <section className="text-center py-20">
        <h1 className="text-4xl font-bold">
          Advanced CAT Prep for the{" "}
          <span className="text-yellow-500 italic">most ambitious;</span> not
          for everyone.
        </h1>
        <p className="text-gray-300 mt-4">
          Do not join us if your target is lower than IIM A, B, or C.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 rounded-lg text-lg font-semibold">
          Start Now
        </button>
            </section>
            <section
              className="text-center py-10 bg-cover bg-center bg-no-repeat h-[500px]"
              style={{ backgroundImage: "url('/sandeep2.png')" }}
            >
            </section>
          </div>
       
            </div>
        
    )
}
export default Start;
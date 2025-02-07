import Image from "next/image";
import NavBar from "./NavBar";
const Start = () => {
    return(
        <div className="bg-[rgb(20,21,19)] text-white">
        <div className="px-12 sm:px-4 lg:px-6 border border-yellow-800 m-12 h-screen bg-gradient-to-b from-[rgba(20,21,19)] via-[rgb(70,67,61)] to-[rgba(20,21,20)] rounded-lg ">
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

            <section className="flex justify-center py-12">
        <div className="bg-gray-800 p-8 rounded-lg flex max-w-4xl w-4/5 md:w-3/5 lg:w-2/3">
          <div className="text-white">
            <h2 className="text-3xl font-bold">Sandeep Gupta</h2>
            <Image
            src="/sandeep.png"
            alt="Logo"
            width={533}
            height={852}
            top = {-332px}
            left={1233px}
            angle={-180 deg} />


            <p className="text-gray-400">
              CAT/GMAT 100%iler <br />
              Rejected IIM-A and Harvard <br />
              CAT Trainer since 1996
            </p>
            <div className="mt-6 flex gap-6">
              <div>
          <h3 className="text-yellow-500 font-bold text-xl">29 Years +</h3>
          <p className="text-gray-400">of transforming lives</p>
              </div>
              <div>
          <h3 className="text-yellow-500 font-bold text-xl">76,000 Hrs +</h3>
          <p className="text-gray-400">Delivered onstage</p>
              </div>
              <div>
          <h3 className="text-yellow-500 font-bold text-xl">100,000 Admits +</h3>
          <p className="text-gray-400">to top schools & counting</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/sandeep-gupta.png"
              alt="Sandeep Gupta"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
            </section>
            </div>
            </div>
    )
}
export default Start;
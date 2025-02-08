export default function MafiaCard() {
    return (
      <div className="flex text-white min-h-screen w-full bg-[rgb(20,21,19)] justify-center items-center p-10">
        {/* Main Container */}
        <div className="flex w-full max-w-[1331px] h-[618px] rounded-lg shadow-lg overflow-hidden">
          {/* Left Section */}
          <div className="bg-[rgb(10,44,69)] p-8 flex-1 flex flex-col justify-center relative">
            <div className="text-2xl font-bold font-qanelas">
              <span className="text-yellow-800">CAT Mafia:</span> <br /> Built on Lies
            </div>
            <p className="text-grey-600 mt-4 text-sm">
              False Promises. Fake Hope. <br /> Endless Looting.
            </p>
            <div className="absolute top-0 right-0 bg-yellow-800 h-6 w-4"></div>
          </div>
  
          {/* Right Section */}
          <div className="bg-[rgb(20,21,19)] p-8 flex-1 flex flex-col justify-center border-[rgb(251,206,101)] border-r-2 border-t-2 border-b-2">
            <h2 className="text-[rgb(251,206,101)] text-lg font-semibold">01</h2>
            <p className="text-sm text-grey-600 mt-4">
              Leave the entire CAT exam blank—you’ll still outrank 60,000+ test-takers.
            </p>
            <p className="text-sm text-grey-600 mt-4">
              Yet, every coaching center sells the same dream: IIM A, B, C—no matter your level.
            </p>
          </div>
        </div>
      </div>
    );
  }
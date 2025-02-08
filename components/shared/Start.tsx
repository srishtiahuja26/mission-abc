import Image from "next/image";
import NavBar from "./NavBar";
const Start = () => {
  return (
    <div className="bg-[rgb(20,21,19)] text-white min-h-screen">
      <div className="mx-4 sm:mx-8 lg:mx-12 my-6 sm:my-12">
      <div className="px-12 sm:px-4 lg:px-6 border-t border-l border-r rounded-lg  border-[rgba(241,188,64,0.24)] m-12 h-screen bg-gradient-to-b from-[rgba(20,21,19)] via-[rgb(70,67,61)] to-[rgba(20,21,20)] ">
          {/* NavBar Container */}
          <div className="px-4 sm:px-6 lg:px-8 pt-6">
            <NavBar />
          </div>

          {/* Hero Section */}
          <section className="relative flex flex-col items-center justify-center w-[1201px] h-[160px] mx-auto mt-[215px] px-4 sm:px-6 lg:px-[66px]">
            <h1 className="text-center" style={{
              fontFamily: 'Qanelas Soft',
              fontWeight: 600,
              fontSize: '80px',
              lineHeight: '80px',
              letterSpacing: '-0.01em',
            }}>
              Advanced CAT Prep for the{' '}
              <span style={{
                fontFamily: 'Afacad',
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}> </span>
              <span style={{
                fontFamily: 'Playfair Display',
                fontWeight: 700,
                fontStyle: 'italic',
                letterSpacing: '-0.05em',
              }} className="text-yellow-500">most ambitious;</span>
              <span style={{
                fontFamily: 'Afacad',
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}> not for everyone.</span>
            </h1>
            <p className="w-[787px] h-[38px] mt-8" style={{
              fontFamily: 'Qanelas Soft',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '38.08px',
              letterSpacing: '0',
              textAlign: 'center',
              color: 'rgba(242, 242, 242, 1)',
            }}>
              Do not join us if your target is lower than IIM A, B, or C.
            </p>
            <div className="hidden md:block">
            <button className="px-6 py-3 bg-[rgba(241,188,64,1)] text-[rgb(20,21,19)] font-semibold rounded-[12px] hover:bg-[#ffa533] transition-colors gap-4 mt-8">
              Start Now
            </button>
          </div>
          </section>

          
        </div>
          {/* Image Section */}
          <section
            className="bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] lg:h-[500px] rounded-b-lg"
            style={{ backgroundImage: "url('/sandeep2.png')" }}
          />
        </div>
      </div>
   
  );
};

export default Start;
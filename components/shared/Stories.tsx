import Image from 'next/image';

const stories = [
    {
      id: 1,
      image: "/person1.svg", 
    },
    {
      id: 2,
      image: "/person2.svg",
    },
    {
      id: 3,
      image: "/person3.svg",
    }
  ];
  

const Stories = () => {
  

  return (
    <div className="relative w-[1440px] h-[832px] mx-auto mt-[5136px]">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(20, 21, 19, 0.7) 0%, rgba(20, 21, 19, 0.7) 100%)',
          backgroundColor: 'rgb(20, 21, 19)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-20">
        <h2 
          className="text-[96px] text-center mb-4"
          style={{
            fontFamily: 'Qanelas Soft',
            fontWeight: 600,
            color: 'rgba(255, 255, 255, 0.7)'
          }}
        >
          Sharing our stories
        </h2>
        <p 
          className="text-2xl text-center mb-16"
          style={{
            fontFamily: 'Qanelas Soft',
            color: 'rgba(255, 255, 255, 0.7)'
          }}
        >
          A wall of our success stories
        </p>

        {/* Carousel */}
        <div className="relative w-full max-w-[1200px] h-[500px] mx-auto">
          <div className="flex items-center justify-center gap-8">
            {/* Navigation Buttons */}
            

            {/* Cards */}
            <div className="flex gap-6 transition-transform duration-500 ease-in-out">
              {stories.map((story, index) => {
                

                return (
                  <div
                    key={story.id}
                    className={`relative transition-all duration-500 ease-in-out transform ${index === 0 ? 'translate-x-0' : '-translate-x-full'}`}
                  >
                    <Image
                            src={story.image}
                            width={400}
                            height={500}
                            className="object-cover rounded-2xl" alt={''}                    />
                    
                     
                    
                  </div>
                );
              })}
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
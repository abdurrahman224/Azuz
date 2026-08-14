import PrimaryButton from "../../../../components/ui/PrimaryButton";

const HeroSection = () => {
  return (
    <div className="relative h-[650px] lg:h-[650px] md:h-[500px] sm:h-[400px] h-[350px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/home/heroSection.jpg')",
        }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/15 md:bg-black/15 sm:bg-black/25"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex items-end pb-12 md:pb-8 sm:pb-6">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex lg:flex-row flex-col items-center lg:items-center justify-between gap-4 lg:gap-0">
            {/* Text */}
            <div className="text-white text-center lg:text-left">
              <h1 className="lg:text-2xl md:text-xl text-lg font-medium uppercase mb-1">
                12 DAYS Of CHRISTMAS
              </h1>
              <p className="text-sm md:text-base lg:text-lg">
                Indulge in a decadent Christmas count down
              </p>
            </div>

            {/* Button */}
            <div className="w-full lg:w-auto">
              <PrimaryButton className="w-full lg:w-auto text-xs sm:text-sm md:text-base whitespace-nowrap">
                SHOP 12 DAYS OF CHRISTMAS
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

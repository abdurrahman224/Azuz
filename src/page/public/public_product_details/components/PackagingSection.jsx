const PackagingSection = () => {
  return (
    <div className="bg-[#00491e] w-full py-12">
      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 items-center gap-8  px-20">
        {/* Text Section */}
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-lg text-[#C3A989] font-normal mb-4">
            The Art of Packaging by The Index
          </h2>
          <h3 className="text-white text-base font-normal">
            All purchases come in The Index signature green packaging complete
            with our white high gloss ribbon.
          </h3>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/product_details/Packaging.webp"
            alt="Packaging"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PackagingSection;

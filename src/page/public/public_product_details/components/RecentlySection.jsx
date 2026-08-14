import Container from "../../../../components/common/Container";
import { useRef } from "react";
import SectionTitle from "../../../../components/ui/SectionTitle";

const products = [
  {
    brand: "La Aroma de Cuba",
    name: "LA AROMA DE CUBA PACK OF 5",
    price: "261.40",
    image: "/images/product_details/recently/image_one.webp",
  },
  {
    brand: "My Father Cigars",
    name: "MY FATHER LE BIJOU 1922 PACK OF 5",
    price: "289.90",
    image: "/images/product_details/recently/image_two.webp",
  },
];

const RecentlySection = () => {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    sliderRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDown.current = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };
  return (
    <div className="bg-[#faf5f0] lg:py-9 pd:my-7 py-5">
      <SectionTitle className={"!text-black"}>Recently viewed</SectionTitle>
      <Container className={""}>
        {/* products */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto snap-x snap-mandatory cursor-grab select-none lg:grid lg:grid-cols-4 md:grid-cols-2 xl:px-10 w-full mx-auto -mt-28 lg:pb-9 md:pb-7 pb-5 scrollbar-hide"
        >
          {products.map((data, index) => (
            <div
              key={index}
              className="
                snap-center shrink-0
                w-[66.66%] sm:w-[66.66%] md:w-[66.66%]
                lg:w-auto lg:shrink
              "
            >
              <div className="overflow-hidden bg-[#faf5f0]">
                <img
                  src={data.image}
                  alt={data.brand}
                  className="w-full h-full object-cover"
                />

                {/* Sold Out only lg+ */}
                {data.sold_out && (
                  <div className="absolute top-0 left-0 bg-white px-2 py-1 text-black text-base hidden lg:block">
                    Sold Out
                  </div>
                )}

                {data.sold && (
                  <div className="absolute top-0 right-0 bg-white px-2 py-1 text-black text-base hidden lg:block">
                    Sold Out
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center text-center lg:px-0 md:px-4 px-3">
                <h2 className="text-sm text-[#B88D5E] font-normal my-2">
                  {data.brand}
                </h2>
                <h2 className="text-sm text-black hover:text-[#00491E] font-normal">
                  {data.product_name}
                </h2>
                <p className="text-base text-black font-normal">{data.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RecentlySection;

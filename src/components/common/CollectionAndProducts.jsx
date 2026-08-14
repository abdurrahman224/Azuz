import { useRef } from 'react';
import PrimaryButton from '../ui/PrimaryButton';
import Container from './Container';

const CollectionAndProducts = ({ fakeData, className, bgImage, title }) => {
  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    sliderRef.current.classList.add('cursor-grabbing');
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDown.current = false;
    sliderRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    sliderRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className={`h-[400px] md:bg-[#111111] ${className}`}>
      <Container className="h-full px-0 pt-20 lg:!px-10">
        {/* banner */}
        <div
          className="hidden h-[465px] items-center justify-center bg-cover bg-center px-10 lg:flex"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="my-auto flex w-[400px] flex-col items-center text-center">
            <h3 className="mb-4 text-[28px] font-semibold text-black uppercase">{title}</h3>
            <PrimaryButton className="w-36">Shop Now</PrimaryButton>
          </div>
        </div>

        {/* products */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className="-mt-32 flex justify-center gap-12"
        >
          {fakeData.map((data, index) => (
            <div
              key={index}
              className="w-[66.66%] shrink-0 snap-center sm:w-[66.66%] md:w-[66.66%] lg:w-72 lg:shrink"
            >
              <div className="relative overflow-hidden bg-[#faf5f0]">
                <img src={data.image} alt={data.brand} className="h-full w-full object-cover" />

                {/* Sold Out only lg+ */}
                {data.sold_out && (
                  <div className="absolute top-0 left-0 hidden bg-white px-2 py-1 text-base text-black lg:block">
                    Sold Out
                  </div>
                )}

                {data.sold && (
                  <div className="absolute top-0 right-0 hidden bg-white px-2 py-1 text-base text-black lg:block">
                    Sold Out
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center px-3 text-center md:px-4 lg:px-0">
                <h2 className="my-2 text-sm font-normal text-[#B88D5E]">{data.brand}</h2>
                <h2 className="text-sm font-normal text-white hover:text-[#00491E]">
                  {data.product_name}
                </h2>
                <p className="text-base font-normal text-white">{data.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CollectionAndProducts;

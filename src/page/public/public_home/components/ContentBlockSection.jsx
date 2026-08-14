import { useState, useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const content = [
  {
    id: 1,
    title: 'Serving you wherever you are…',
    category: 'Australia’s Destination',
    image: '/images/home/content_block/image1.webp',
    description:
      'Trusted by thousands of cigar connoisseurs Australia wide. Shop Australia’s largest range of Cuban and New World cigars from the comfort of your home. Enjoy seamless shopping with same-day shipping for orders placed by 2pm, Monday to Friday with tracked shipping with Australia Post.',
  },
  {
    id: 2,
    title: 'One of a kind',
    category: 'The Humidor',
    image: '/images/home/content_block/image2.webp',
    description:
      'Our state-of-the-art humidor is the product of 12-months’ thoughtful collaboration between hydraulics experts, specialist contractors and engineers. Crafted from the highest quality Australian cedar with air quality balanced to perfection, This means that all of our cigars are maintained at the correct humidity and temperature.',
  },
  {
    id: 3,
    title: 'AN INTENTIONAL DEPARTURE...',
    category: 'Our maison',
    image: '/images/home/content_block/image3.webp',
    description:
      'Our artfully designed Brisbane Maison is an intentional departure from the traditional market aesthetic. Warm and inviting, with considered finishes and home to The Index’s Humidor.',
  },
  {
    id: 4,
    title: 'Our commitment to excellence…',
    category: 'The Service',
    image: '/images/home/content_block/image4.webp',
    description:
      'White glove service is The Index standard. Indulge in the pinnacle of retail service with a dedicated 1-to-1 personalised shopping experience. Discover an unparalleled service that caters to your every need and desire.',
  },
];

const ContentBlockSection = () => {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const prevSlide = () => {
    setIndex((p) => (p === 0 ? content.length - 1 : p - 1));
  };

  const nextSlide = () => {
    setIndex((p) => (p === content.length - 1 ? 0 : p + 1));
  };

  const handleStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleEnd = (e) => {
    if (!isDragging.current) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX.current - endX;
    if (diff > 80) nextSlide();
    if (diff < -80) prevSlide();
    isDragging.current = false;
  };

  const item = content[index];
  const isImageLeft = index % 2 === 0;

  return (
    <div className="mx-auto mb-5 max-w-5xl p-5 md:mt-[240px] md:mb-7 md:p-0 lg:mt-[470px] lg:mb-9 xl:mt-[500px]">
      {/* SLIDE */}
      <div
        className="grid cursor-grab grid-cols-1 lg:grid-cols-2"
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
      >
        {/* IMAGE */}
        <div
          className={`${
            isImageLeft ? 'lg:order-1' : 'lg:order-2'
          } h-[400px] md:h-[500px] lg:h-[400px]`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* 🖥 DESKTOP TEXT (lg & xl ONLY) */}
        <div
          className={`hidden flex-col justify-center border border-gray-600 bg-black px-6 lg:flex ${isImageLeft ? 'lg:order-2' : 'lg:order-1'} `}
        >
          <h3 className="mb-5 text-lg text-[#C3A989] uppercase">{item.category}</h3>
          <h3 className="mb-3 text-[32px] font-semibold uppercase">{item.title}</h3>
          <p className="text-lg">{item.description}</p>
        </div>
      </div>

      {/* 📱 MOBILE TEXT (sm & md ONLY) WITH FIXED CONTROLS */}
      <div className="relative block h-[480px] bg-white px-6 py-8 text-center md:hidden">
        <div className="h-full overflow-y-auto pb-5">
          <h3 className="mb-3 text-lg text-[#C3A989] uppercase md:mb-5">{item.category}</h3>
          <h3 className="mb-3 text-[26px] font-semibold text-black uppercase md:text-[32px]">
            {item.title}
          </h3>
          <p className="text-lg text-black">{item.description}</p>
        </div>

        {/* CONTROLS FIXED AT BOTTOM */}
        <div className="absolute bottom-4 left-0 flex w-full justify-center gap-6 text-black">
          <button onClick={prevSlide}>
            <MdKeyboardArrowLeft className="h-10 w-10" />
          </button>
          <button onClick={nextSlide}>
            <MdKeyboardArrowRight className="h-10 w-10" />
          </button>
        </div>
      </div>

      {/* DESKTOP CONTROLS */}
      <div className="hidden justify-center gap-6 py-8 text-white md:flex">
        <button onClick={prevSlide}>
          <MdKeyboardArrowLeft className="h-10 w-10" />
        </button>
        <button onClick={nextSlide}>
          <MdKeyboardArrowRight className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
};

export default ContentBlockSection;

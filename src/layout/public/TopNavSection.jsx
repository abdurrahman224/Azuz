import { useEffect, useRef, useState } from "react";

const texts = [
  "VISIT US IN STORE NOW",
  "ONLINE ORDERS WILL STILL BE SHIPPED SAME DAY AS USUAL",
];

const TopNavSection = () => {
  const [index, setIndex] = useState(1); // start from real first
  const [isTransition, setIsTransition] = useState(true);

  const sliderRef = useRef(null);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const isDragging = useRef(false);
  const autoRef = useRef(null);

  // extended list for infinite loop
  const slides = [texts[texts.length - 1], ...texts, texts[0]];

  // auto slide
  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  const startAuto = () => {
    stopAuto();
    autoRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
  };

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
  };

  // infinite fix
  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setIsTransition(false);
        setIndex(1);
      }, 500);
    }

    if (index === 0) {
      setTimeout(() => {
        setIsTransition(false);
        setIndex(slides.length - 2);
      }, 500);
    }

    setTimeout(() => setIsTransition(true), 600);
  }, [index]);

  // mouse events
  const handleMouseDown = (e) => {
    stopAuto();
    isDragging.current = true;
    startX.current = e.clientX;
    currentTranslate.current = -index * sliderRef.current.offsetWidth;
    sliderRef.current.style.transition = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    sliderRef.current.style.transform = `translateX(${
      currentTranslate.current + diff
    }px)`;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diff = e.clientX - startX.current;
    sliderRef.current.style.transition = "transform 0.5s ease";

    if (diff > 80) {
      setIndex((prev) => prev - 1);
    } else if (diff < -80) {
      setIndex((prev) => prev + 1);
    } else {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }

    startAuto();
  };

  return (
    <div
      className="bg-[#003d1c] text-white overflow-hidden cursor-grab select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        ref={sliderRef}
        className="flex"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: isTransition ? "transform 0.5s ease" : "none",
        }}
      >
        {slides.map((text, i) => (
          <div
            key={i}
            className="min-w-full text-center py-[10px] text-base font-semibold tracking-wide"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNavSection;

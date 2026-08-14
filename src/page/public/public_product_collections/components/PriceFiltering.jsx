import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const PriceFiltering = () => {
  const [isOpen, setIsOpen] = useState(true);

  const priceRanges = [
    { id: "under-250", label: "Under $250" },
    { id: "500-1000", label: "$500 - $1,000" },
  ];

  return (
    <div className="text-white p-4 font-sans">
      {/* Header / Accordion Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-start gap-2 pb-2 focus:outline-none"
      >
        <IoMdArrowDropdown
          size={18}
          className={`transition-transform duration-300 ${
            !isOpen ? "-rotate-90" : ""
          }`}
        />
        <span className="text-sm font-bold">PRICE ($)</span>
      </button>

      {/* Decorative Underline */}
      <div className="mb-4 h-[1px] w-full bg-[#ee943a]" />

      {/* Animated Filter Options */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 pl-1 pt-2">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-3 mb-3 cursor-pointer select-none"
            >
              {/* Custom Checkbox */}
              <span className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  className="peer w-4 h-4 appearance-none border border-[#d9bca5] cursor-pointer checked:border-white"
                />
                <BsCheck className="absolute w-5 h-5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
              </span>

              {/* Label */}
              <span className="text-[15px] text-white">{range.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceFiltering;

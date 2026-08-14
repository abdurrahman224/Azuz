import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const menuItems = ["B Cigar", "EGM", "Davidoff"];

const Collection = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="col-span-1">
      <div className="p-6 font-sans text-white">
        {/* Accordion Header */}
        <div
          className="flex items-center cursor-pointer border-b border-[#ee943a] pb-2 mb-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMdArrowDropdown
            className={`text-xl transition-transform duration-300 ${
              !isOpen ? "-rotate-90" : ""
            }`}
          />
          <h2 className="ml-1 text-base font-semibold">COLLECTION</h2>
        </div>

        {/* Animated List Container */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-3.5">
            {menuItems.map((item, index) => (
              <li key={index} className={`text-base font-normal`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Collection;

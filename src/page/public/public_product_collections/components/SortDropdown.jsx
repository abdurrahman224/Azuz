import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Alphabetical (A-Z)");

  const sortOptions = [
    "Relevance",
    "Manual",
    "New",
    "Alphabetical (A-Z)",
    "Alphabetical (Z-A)",
    "Price: Low to High",
    "Price: High to Low",
  ];

  const handleSelect = (option) => {
    setSelectedSort(option);
    setIsOpen(false);
  };

  return (
    <div className="inline-block relative border border-gray-300 hover:border-gray-400 transition-colors px-3 py-1.5">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold tracking-wide">SORT BY:</span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 md:px-4 px-1 md:py-2 py-1.5"
        >
          <span className="text-sm">{selectedSort}</span>
          {isOpen ? (
            <MdOutlineKeyboardArrowUp className="w-5 h-5" />
          ) : (
            <MdOutlineKeyboardArrowDown className="w-5 h-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-black z-10 min-w-[240px]">
          {sortOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-700 transition-colors ${
                option === selectedSort ? "bg-gray-600" : ""
              } ${option === "Alphabetical (A-Z)" ? "underline" : ""}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default SortDropdown;

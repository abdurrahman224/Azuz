import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const faqData = [
  {
    question: "HOW WILL MY ORDER BE PACKED?",
    answer:
      "All in store and online purchases will be packed in The Index signature packaging. At The Index it is our commitment to ensure that all purchases are packed to the highest standard.\n\nShould you wish to add Humidity Control to your cigars for shipment, please select the add on at the checkout process.",
  },
  {
    question:
      "I HAVE PURCHASED A BOX OF CIGARS FROM THE INDEX BUT THE SEALS ON THE BOX ARE NOT INTACT. IS THIS NORMAL?",
    answer:
      "Yes, it is common for us to inspect the quality of the cigars before shipping to ensure they meet our standards. This requires breaking the seal.",
  },
  {
    question: "WHAT CURRENCY ARE YOUR PRICES LISTED IN?",
    answer:
      "All prices are listed in our local currency (e.g., AUD/USD) as specified in the header of the website.",
  },
  {
    question: "DO YOU SHIP INTERNATIONALLY?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.",
  },
  {
    question: "HOW LONG WILL IT TAKE FOR MY ORDER TO ARRIVE?",
    answer:
      "Domestic orders typically take 3-5 business days. International shipping can take 7-14 business days depending on customs.",
  },
  {
    question: "HOW DO I CUT A CIGAR?",
    answer:
      "Use a sharp cigar cutter to slice the cap just above the shoulder of the cigar. Avoid cutting too deep to prevent the wrapper from unraveling.",
  },
  {
    question: "HOW DO I STORE CIGARS TO MAINTAIN THE HIGHEST QUALITY?",
    answer:
      "Cigars should be stored in a humidor at approximately 70% humidity and 21°C (70°F) to prevent them from drying out or molding.",
  },
  {
    question: "WHAT DOES RING GAUGE MEAN?",
    answer:
      "Ring gauge refers to the diameter of a cigar, measured in 1/64ths of an inch.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h4 className="text-lg tracking-[0.3em] text-[#C5A27D] mb-2">FAQS</h4>
        <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase">
          More Info
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-0 border-t border-black/10">
        {/* Left Column - Questions */}
        <div className="w-full md:w-1/2 px-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left py-5 px-4 flex justify-between items-center transition-colors duration-300`}
              >
                <span
                  className={`text-[13px] tracking-wider leading-tight uppercase ${
                    activeIndex === index
                      ? "text-white font-bold"
                      : "text-white"
                  }`}
                >
                  {item.question}
                </span>
                <span className="md:hidden">
                  {activeIndex === index ? (
                    <FaChevronDown size={18} />
                  ) : (
                    <FaChevronRight size={18} />
                  )}
                </span>
              </button>

              {/* Mobile Answer */}
              <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-[500px] opacity-100 pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-[#F9F6F1] p-6 border-l-4 border-[#C5A27D] text-sm leading-relaxed text-gray-700 whitespace-pre-line">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block md:w-1/2 relative">
          <div className="sticky top-10 bg-[#F9F6F1] p-10 border-l-[3px] border-[#C5A27D] h-[480px]">
            {/* Pointer Arrow */}
            <div
              className="absolute left-[-10px] top-8 w-0 h-0
              border-t-[10px] border-t-transparent
              border-r-[10px] border-r-[#C5A27D]
              border-b-[10px] border-b-transparent"
            ></div>

            <div className="text-[15px] leading-relaxed text-gray-800 whitespace-pre-line">
              {faqData[activeIndex]?.answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

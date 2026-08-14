import { useEffect, useState } from "react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const FilterSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    { id: "collection", label: "COLLECTION" },
    { id: "price", label: "PRICE ($)" },
    { id: "type", label: "PRODUCT TYPE" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[350px] z-50 bg-white dark:bg-black
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
          ${isScrolled ? "shadow-lg" : ""}
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-2xl text-black dark:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <IoCloseOutline />
          </button>
        </div>

        {/* Header */}
        <div className="py-4 text-center border-b border-gray-100">
          <h2 className="text-sm font-semibold tracking-widest uppercase">
            Refine By
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col">
          {sections.map((section) => (
            <div key={section.id} className="border-b border-gray-100">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between w-full py-5 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="text-[15px] font-medium tracking-wide uppercase">
                  {section.label}
                </span>

                {/* Icon Logic */}
                {openSection === section.id ? (
                  <HiChevronDown className="w-5 h-5 text-white" />
                ) : (
                  <HiChevronRight className="w-5 h-5 text-white" />
                )}
              </button>

              {/* Expandable Content Area */}
              {openSection === section.id && (
                <div className="px-4 pb-5 animate-fadeIn">
                  <p className="text-sm text-gray-200">
                    Filter options for {section.label} would go here...
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default FilterSidebar;

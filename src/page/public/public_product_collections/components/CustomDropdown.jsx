import { useState } from 'react';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import SortDropdown from './SortDropdown';
import FilterSidebar from './FilterSidebar';

const CustomDropdown = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-black p-2">
      {/* Sort Bar */}
      <div className="flex w-full max-w-4xl items-center border border-gray-700 bg-black p-2 md:border-none">
        {/* RIGHT SIDE CONTENT */}
        <div className="flex w-full items-center justify-between gap-4 md:justify-end md:gap-8">
          <SortDropdown />

          {/* MOBILE ONLY */}
          <div className="block md:hidden">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-white">
                <span>Refine By</span>
              </div>

              <button
                className="rounded p-1.5 hover:bg-gray-800"
                onClick={() => setSidebarOpen(true)}
              >
                <HiAdjustmentsHorizontal className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Right Sidebar */}
      <FilterSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
};

export default CustomDropdown;

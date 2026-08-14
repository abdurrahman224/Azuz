import { useState, useEffect } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';
import { IoCloseOutline, IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import ShoppingCart from '../../components/common/ShoppingCart';

const navItems = [
  { id: 1, label: 'Home', path: '/' },
  { id: 2, label: 'Shop Cigars', path: '/collections/shop-cigars' },
  { id: 3, label: 'B Cigar', path: '/collections/b-cigar' },
  { id: 4, label: 'EGM Cigars', path: '/collections/egm-cigars' },
  { id: 5, label: 'Accessories', path: '/collections/accessories' },
  {
    id: 6,
    label: 'Book Cigar Lounge',
    path: '/collections/book-lounge',
    subLabel: 'Book Lounge',
  },
  { id: 7, label: 'Contact Us', path: '/contact' },
];

const NavBarSection = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 🔹 scroll animation logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'} ${sidebarOpen ? 'bg-black' : ''} h-h-17.5 lg:h-h-26.5`}
    >
      <div className="container mx-auto flex h-full items-center justify-between gap-10 px-5 lg:px-10">
        {/* Logo */}
        <div className="h-auto w-40">
          <Link to="/">
            <img
              src="/images/home/logo.png"
              alt="nav icon"
              className="h-auto w-full object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden flex-col gap-2 whitespace-nowrap lg:flex xl:gap-0">
          <div className="flex justify-center gap-2 lg:flex-wrap xl:flex-nowrap">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="px-3 py-1 text-center text-lg font-normal uppercase transition-all duration-200 hover:text-[#eba147]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <Link to="/">
            <IoSearch className="h-5 w-5" />
          </Link>

          <div className="hidden lg:block">
            <Link to="/login">
              <FaRegUser className="h-5 w-5" />
            </Link>
          </div>

          {/* shopping cart */}
          <ShoppingCart />

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <IoIosMenu className="h-6 w-6 cursor-pointer" onClick={() => setSidebarOpen(true)} />
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 right-0 z-50 h-full w-87.5 transform bg-black transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex justify-end p-4">
              <button className="text-2xl text-white" onClick={() => setSidebarOpen(false)}>
                <IoCloseOutline />
              </button>
            </div>

            <div className="mt-10 flex flex-col gap-4 px-5">
              {navItems.map((item, index) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`text-lg text-white uppercase transition-all duration-500 ${
                    sidebarOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Overlay */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setSidebarOpen(false)} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBarSection;

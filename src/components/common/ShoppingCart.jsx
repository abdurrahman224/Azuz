import { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';

const ShoppingCart = () => {
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

  // Sidebar items (you can replace with real cart items)
  const cartItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return (
    <div className="relative">
      {/* Cart Icon */}
      <FiShoppingCart className="h-6 w-6 cursor-pointer" onClick={() => setSidebarOpen(true)} />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[350px] transform bg-white transition-transform duration-300 dark:bg-black ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} ${isScrolled ? 'shadow-lg' : ''} `}
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

        {/* Sidebar Content */}
        <div className="flex flex-col gap-4 p-5">
          {/* Animated Heading */}
          <h2
            className={`text-xl font-bold transition-all duration-500 ${
              sidebarOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `100ms` }}
          >
            Shopping Cart
          </h2>

          {/* Animated message */}
          <p
            className={`transition-all duration-500 ${
              sidebarOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `200ms` }}
          >
            Your cart is empty.
          </p>

          {/* Animated cart items */}
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-500 ${
                sidebarOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
};

export default ShoppingCart;

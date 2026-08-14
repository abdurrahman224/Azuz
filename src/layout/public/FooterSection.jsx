import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import AllNewsletter from '../../components/common/AllNewsletter';
import TiltButton from '../../components/ui/TiltButton';

const Footer = () => {
  return (
    <div className="bg-[#222222] text-white">
      <div className="w-full py-6 sm:py-7 md:py-8">
        <div className="container mx-auto px-7 lg:px-10">
          {/* Top Section */}
          <div className="mb-6 grid grid-cols-1 gap-8 sm:mb-7 sm:gap-10 md:mb-8 md:gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Newsletter Section */}
            <AllNewsletter showSuccessMessage={false} button={TiltButton} buttonText="Submit" />

            {/* Center Section - Logo */}
            <div className="order-first flex w-full flex-col items-center justify-start text-center md:order-0">
              <h1 className="mb-2 font-serif text-3xl tracking-widest sm:text-4xl md:text-5xl lg:text-4xl">
                THE INDEX
              </h1>
              <p className="mb-6 text-xs tracking-widest sm:mb-8 sm:text-sm">
                LUXURY CIGAR PURVEYORS
              </p>

              <div className="mb-8 flex gap-4 sm:mb-12 sm:gap-6">
                <a href="">
                  <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="">
                  <FaFacebookF className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="">
                  <FaTiktok className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>

              <nav className="space-y-3 text-sm sm:space-y-4 sm:text-base">
                <a href="" className="block">
                  Services
                </a>
                <a href="" className="block">
                  The Experience
                </a>
                <a href="" className="block">
                  FAQ
                </a>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="order-first flex w-full flex-col items-center justify-start text-center md:order-0">
              <h2 className="mb-3 text-lg font-bold tracking-wide sm:mb-4 sm:text-xl md:text-2xl">
                CONTACT INFO
              </h2>
              <div className="mb-4 space-y-2 sm:mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300 sm:text-base md:justify-start lg:justify-end">
                  <MdPhone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>(07) 2111 1666</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300 sm:text-base md:justify-start lg:justify-end">
                  <MdEmail className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="break-all">info@theindex.com.au</span>
                </div>
              </div>

              <a href="">
                <TiltButton children={'CONTACT INFO'} />
              </a>

              <h2 className="mt-8 mb-3 text-lg font-bold tracking-wide sm:mt-12 sm:mb-4 sm:text-xl md:text-2xl">
                OUR MAISON
              </h2>
              <div className="mb-4 flex items-center justify-center gap-2 sm:mb-6 md:justify-start lg:justify-end">
                <HiLocationMarker className="h-4 w-4 text-gray-300 sm:h-5 sm:w-5" />
                <p className="text-sm text-gray-300 sm:text-base">
                  Visit the home of The Index's Humidor.
                </p>
              </div>
              <a href="">
                <TiltButton children={'VISIT US'} />
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 gap-8 pt-6 sm:gap-10 sm:pt-7 md:gap-12 md:pt-8 lg:grid-cols-3 lg:gap-16">
            {/* Payment Methods - Centered on mobile/tablet, Left on desktop */}
            <div className="text-center lg:text-left">
              <h3 className="mb-3 text-xs font-semibold sm:mb-4 sm:text-sm">WE ACCEPT</h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
                <div className="rounded bg-white px-2 py-1 sm:px-3 sm:py-2">
                  <span className="text-xs font-bold text-black">AMEX</span>
                </div>
                <div className="rounded bg-white px-2 py-1 sm:px-3 sm:py-2">
                  <span className="text-xs font-bold text-black">MC</span>
                </div>
                <div className="rounded bg-white px-2 py-1 sm:px-3 sm:py-2">
                  <span className="text-xs font-bold text-black">VISA</span>
                </div>
                <div className="rounded bg-white px-2 py-1 sm:px-3 sm:py-2">
                  <span className="text-xs font-bold text-black">BANK</span>
                </div>
              </div>
            </div>

            {/* Links - Always centered (stays consistent across all devices) */}
            <div className="space-y-2 text-center text-sm sm:space-y-3 sm:text-base">
              <a href="#" className="block transition-opacity hover:opacity-70">
                Shipping & Returns
              </a>
              <a href="#" className="block transition-opacity hover:opacity-70">
                Terms & Conditions
              </a>
              <a href="#" className="block transition-opacity hover:opacity-70">
                Privacy Policy
              </a>
            </div>

            {/* Copyright - Centered on mobile/tablet, Right on desktop */}
            <div className="flex flex-col justify-center text-center lg:items-end lg:text-right">
              <p className="text-xs text-gray-300 sm:text-sm">
                Copyright © 2025 THE INDEX LCP PTY LTD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

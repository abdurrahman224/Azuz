import Container from "../../../../components/common/Container";

const BannerSection = () => {
  return (
    <Container
      className={"grid lg:grid-cols-2 grid-cols-1 border border-white"}
    >
      <div className="col-span-1">
        <div className="h-[600px]">
          <img
            src="/images/home/single_cart.webp"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="h-[600px]">
          <img
            src="/images/home/single_cart.webp"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="bg-black text-white flex items-center sticky top-[90px] self-start h-fit pl-[45px]">
        <div className="max-w-3xl mx-auto px-6 py-16 w-full">
          {/* Brand */}
          <p className="text-base uppercase text-white font-normal mb-2">
            Altadis
          </p>

          {/* Title */}
          <h1 className="text-3xl font-semibold uppercase mb-4">
            2 IN 1 GUILLOTINE & V COMBO CUTTER
          </h1>

          {/* Price */}
          <p className="text-2xl font-normal mb-6">$14.90</p>

          {/* Description */}
          <p className="text-base text-white mb-8">
            An entry level cigar cutter that provides a reliable straight & V
            cut ideal for cigar enthusiasts who are beginning their journey.
            This is the perfect cutter to begin with while finding your cigar
            cut preferences.
          </p>

          {/* Product details dropdown */}
          <div className="border-b border-gray-700 pb-4 mb-8 flex justify-between items-center">
            <p className="uppercase text-lg font-semibold">Product Details</p>
            <span className="text-xl">⌄</span>
          </div>

          {/* Quantity & Button */}
          <div className="flex items-center gap-6 mb-10">
            {/* Quantity */}
            <div className="flex border border-gray-600">
              <button className="px-4 py-2 border-r border-gray-600 hover:bg-gray-800">
                −
              </button>
              <span className="px-5 py-2">1</span>
              <button className="px-4 py-2 border-l border-gray-600 hover:bg-gray-800">
                +
              </button>
            </div>

            {/* Add to cart */}
            <button className="bg-green-900 hover:bg-green-800 transition px-10 py-3 uppercase tracking-wide text-sm font-medium">
              Add to Cart
            </button>
          </div>

          {/* Info sections */}
          <div className="space-y-6 text-sm text-gray-300">
            <div className="flex gap-4">
              <span>
                <img
                  src="/images/icon/payment.webp"
                  alt=""
                  className="w-11 h-auto bg-cover object-cover"
                />
              </span>
              <div className="font-normal text-white">
                <p className="uppercase text-base mb-1">Payment Information</p>
                <p className="text-sm">
                  Visa, Mastercard, American Express and bank transfer.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span>
                <img
                  src="/images/icon/service.png"
                  alt=""
                  className="w-11 h-auto bg-cover object-cover"
                />
              </span>
              <div className="font-normal text-white">
                <p className="uppercase text-white mb-1">Client Services</p>
                <p className="text-sm">
                  Our dedicated team are available to assist you via phone or
                  email.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span>
                <img
                  src="/images/icon/delivery.webp"
                  alt=""
                  className="w-11 h-auto bg-cover object-cover"
                />
              </span>
              <div className="font-normal text-white">
                <p className="uppercase text-white mb-1">Delivery Details</p>
                <p className="text-sm">
                  Same day shipping on orders placed before 2pm, Monday to
                  Friday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BannerSection;

import CollectionAndProducts from '../../../../components/common/CollectionAndProducts';
import PrimaryButton from '../../../../components/ui/PrimaryButton';

const fakeData = [
  {
    brand: 'Daniel Marshall',
    product_name: 'LIMITED EDITION 38TH ANNIVERSARY GOLDEN CIGAR CUTTER',
    image: '/images/home/our_exclusive_products/image1.webp',
    price: '$89.00',
    sold: true,
  },
  {
    brand: 'Daniel Marshall',
    product_name: 'ALUMINIUM ASHTRAY',
    image: '/images/home/our_exclusive_products/image2.webp',
    price: '$99.00',
    sold: false,
  },
  {
    brand: 'Daniel Marshall',
    product_name: 'RED LABEL CORONA',
    image: '/images/home/our_exclusive_products/image3.webp',
    price: '$45.10',
    sold: false,
  },
];

const OurExclusiveProducts = () => {
  return (
    <div className="md:mt-[275px] lg:mt-[450px] xl:mt-[500px]">
      <CollectionAndProducts
        bgImage={'/images/home/our_exclusive_products/bgImage.webp'}
        className={'md:!bg-[#0e0e0e]'}
        fakeData={fakeData}
        title={'OUR EXCLUSIVE PRODUCTS'}
      />
    </div>
  );
};

export default OurExclusiveProducts;

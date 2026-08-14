import CollectionAndProducts from '../../../../components/common/CollectionAndProducts';
import PrimaryButton from '../../../../components/ui/PrimaryButton';

const fakeData = [
  {
    brand: 'Arturo Fuente - OpusX',
    product_name: "FUENTE FUENTE OPUS X OXO ORO OSCURO RESERVA D'CHATEAU",
    image: '/images/home/latest_collection/cardImage.webp',
    price: 'from $129.00',
    sold_out: true,
  },
  {
    brand: 'Arturo Fuente - OpusX',
    product_name: "ARTURO FUENTE RARE PINK VINTAGE 1960'S SERIES WORK OF ART",
    image: '/images/home/latest_collection/cardImage.webp',
    price: 'from $74.00',
    sold_out: false,
  },
  {
    brand: 'Arturo Fuente - OpusX',
    product_name: "ARTURO FUENTE RARE PINK VINTAGE 1960'S SERIES SIGNATURE",
    image: '/images/home/latest_collection/cardImage.webp',
    price: 'from $68.00',
    sold_out: false,
  },
];

const LatestCollectionSection = () => {
  return (
    <div className="mt-14 lg:mt-0">
      <CollectionAndProducts
        bgImage={'/images/home/latest_collection/background.webp'}
        fakeData={fakeData}
        title={'Latest Collection'}
      />
    </div>
  );
};

export default LatestCollectionSection;

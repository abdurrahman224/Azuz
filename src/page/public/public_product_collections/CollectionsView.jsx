import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCart from './components/ProductCart';
import SideSection from './components/SideSection';
import CustomDropdown from './components/CustomDropdown';

const CollectionsView = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch('/fake_data/product_cart.json')
      .then((res) => res.json())
      .then((data) => setCardData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto">
      <div className={'grid grid-cols-3 md:grid-cols-5'}>
        {/* Side Section */}
        <SideSection />

        {/* Content section */}
        <div className="col-span-4">
          <div className="">
            {/* <div className="flex items-center justify-end mb-2">
              <SortDropdown />
            </div> */}
            <div className="">
              <CustomDropdown />
            </div>
          </div>
          <div className="grid grid-cols-3 px-2 md:px-0">
            {cardData.map((data) => (
              <Link to={`/collections/${data.slug}/${data.id}`} key={data.id}>
                <ProductCart data={data} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsView;

import { useEffect, useState } from 'react';
import Container from '../../../../components/common/Container';
import AllCategory from '../../../../components/common/AllCategory';
import { Link } from 'react-router-dom';

const ShopChristmasGiftsSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('./fake_data/category.json')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <h2 className="mb-16 text-center text-2xl font-semibold uppercase">Shop Christmas Gifts</h2>
      <div className="grid grid-cols-2 px-7 lg:grid-cols-4 lg:px-10">
        {categories.map((category) => (
          <Link to="/collections/category-one" key={category.id}>
            <AllCategory category_name={category.category_name} image={category.image} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default ShopChristmasGiftsSection;

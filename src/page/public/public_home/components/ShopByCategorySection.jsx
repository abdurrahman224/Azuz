import AllCategory from '../../../../components/common/AllCategory';
import Container from '../../../../components/common/Container';
import SectionTitle from '../../../../components/ui/SectionTitle';

const categories = [
  {
    id: 1,
    title: 'Tasting Packs',
    image: '/images/home/shop_by_category/imageOne.webp',
  },
  {
    id: 2,
    title: 'Limited & Regional',
    image: '/images/home/shop_by_category/imageTwo.webp',
  },
  {
    id: 3,
    title: 'Humidors',
    image: '/images/home/shop_by_category/imageThree.webp',
  },
  {
    id: 4,
    title: 'Cutters & Lighters',
    image: '/images/home/shop_by_category/imageFour.webp',
  },
];

const ShopByCategorySection = () => {
  return (
    <Container className="">
      <SectionTitle>Shop by category</SectionTitle>
      <div className="grid grid-cols-2 px-7 md:px-10 lg:grid-cols-4">
        {categories.map((category) => (
          <AllCategory key={category.id} category_name={category.title} image={category.image} />
        ))}
      </div>
    </Container>
  );
};

export default ShopByCategorySection;

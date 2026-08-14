import PrimaryButton from '../../../../components/ui/PrimaryButton';

const category = [
  {
    id: 1,
    title: 'Shop Cuban',
    image: '/images/home/cuban_banner.jpg',
    primary: 'Shop Now',
  },
  {
    id: 2,
    title: 'Shop New World',
    image: '/images/home/world_banner.jpg',
    primary: 'Shop Now',
  },
];

const CategorySection = () => {
  return (
    <div className="grid h-[600px] grid-cols-1 lg:grid-cols-2">
      {category.map((item) => (
        <div key={item.id} className="group relative h-full w-full overflow-hidden">
          {/* Background Image */}
          <div
            className="h-full w-full bg-cover bg-center grayscale group-hover:grayscale-0"
            style={{
              backgroundImage: `url('${item.image}')`,
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 duration-300 group-hover:opacity-0" />

          {/* Center Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="flex flex-col gap-2 text-center text-white lg:gap-4">
              <h2 className="text-2xl font-semibold uppercase lg:text-3xl">{item.title}</h2>

              {item.primary && <PrimaryButton>{item.primary}</PrimaryButton>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;

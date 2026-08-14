import Collection from "./Collection";
import PriceFiltering from "./PriceFiltering";
import ProductType from "./ProductType";

const SideSection = () => {
  return (
    <div className="flex flex-col col-span-1 gap-10 md:sticky md:top-[90px] md:self-start md:h-fit">
      <div className="hidden md:block">
        {/* Collection */}
        <Collection />
        {/* Price */}
        <PriceFiltering />
        {/* Product type */}
        <ProductType />
      </div>
    </div>
  );
};

export default SideSection;

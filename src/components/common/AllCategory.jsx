const AllCategory = ({ image, category_name }) => {
  return (
    <div className="col-span-1 px-10">
      <div className="group">
        <div className="overflow-hidden">
          <img
            src={image ? image : ''}
            alt={category_name ? category_name : ''}
            className="h-full w-full border-2 bg-cover object-cover transition-transform duration-800 ease-in-out group-hover:scale-105"
          />
        </div>
        <h3 className="mt-1.5 pb-6 text-center text-base font-normal text-white uppercase">
          {category_name ? category_name : ''}
        </h3>
      </div>
    </div>
  );
};

export default AllCategory;

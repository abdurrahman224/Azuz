const ProductCart = ({ data }) => {
  return (
    <div key={data.id} className="col-span-1 max-h-[550px] md:p-2">
      <div className="">
        <div className="overflow-hidden">
          <img src={data.image} alt="" className="h-full w-full bg-cover object-cover" />
          {data.sold_out & true ? (
            <div className="-mt-10">
              <p className="bg-[#f1902e] p-[7px]">Sold Out</p>
            </div>
          ) : (
            ''
          )}
        </div>

        <h3 className="mt-1 pb-3 text-start text-lg font-normal text-[#D4BB9E] md:mt-[6px] md:pb-5 lg:pb-6">
          {data.brand}
        </h3>
        <p className="text-base font-normal text-white">{data.product_name}</p>
        <p className="text-base font-normal text-white">$ {data.price}</p>
      </div>
    </div>
  );
};

export default ProductCart;

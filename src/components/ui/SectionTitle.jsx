const SectionTitle = ({ children, className }) => {
  return (
    <h1 className="my-4 text-center text-xl font-medium text-white uppercase md:my-5 md:text-[24px] lg:my-6 lg:text-[32px] xl:my-8">
      {children}
    </h1>
  );
};

export default SectionTitle;

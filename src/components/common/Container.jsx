const Container = ({ children, className }) => {
  return (
    <div className={`container mx-auto lg:my-9 md:my-7 my-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;

const PrimaryButton = ({ children, className, onClick }) => {
  return (
    <button
      className={`cursor-pointer border border-gray-100 bg-gray-100 px-7 py-2.5 font-medium text-black shadow-sm transition duration-300 hover:bg-black hover:text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

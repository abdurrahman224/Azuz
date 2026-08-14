const TiltButton = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="px-2 py-2 bg-transparent text-white uppercase font-normal border-b-2 border-amber-500 group"
    >
      <span className="inline-block transition-all group-hover:italic duration-50">
        {children}
      </span>
    </button>
  );
};

export default TiltButton;

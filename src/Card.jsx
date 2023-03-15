const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white rounded-3xl p-6 shadow-lg flex flex-col justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

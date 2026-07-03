function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-gray-800
        bg-gray-900
        shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
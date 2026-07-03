function SecondaryButton({ children }) {
  return (
    <button
      className="
      rounded-xl
      border
      border-gray-700
      px-7
      py-3
      hover:border-blue-500
      transition
      duration-300
      "
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
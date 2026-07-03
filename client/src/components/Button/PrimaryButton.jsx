function PrimaryButton({ children}) {
  return (
    <button
      className={`rounded-xl
      bg-blue-600
      hover:bg-blue-700
      px-7
      py-3
      font-semibold
      transition`}
      
      duration-300
      
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
function Section({ children, className = "" }) {
  return (
    <section
      className={`bg-gray-950 py-24 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
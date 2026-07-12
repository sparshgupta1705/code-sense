export default function ProblemSearch({
  search,
  setSearch,
}) {
  return (
    <input
      type="text"
      placeholder="Search Problems..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
    />
  );
}
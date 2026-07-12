export default function ProblemFilters({
  difficulty,
  setDifficulty,
  category,
  setCategory,
}) {
  return (
    <div className="flex gap-4 flex-wrap">

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="border rounded-lg px-4 py-2"
      >
        <option value="All">All Difficulty</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-lg px-4 py-2"
      >
        <option value="All">All Categories</option>
        <option>Array</option>
        <option>String</option>
        <option>Two Pointers</option>
        <option>Sliding Window</option>
        <option>Stack</option>
        <option>Queue</option>
        <option>Linked List</option>
        <option>Binary Search</option>
        <option>Tree</option>
        <option>Graph</option>
        <option>Dynamic Programming</option>
      </select>

    </div>
  );
}
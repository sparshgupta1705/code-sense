import ProblemCard from "./ProblemCard";

export default function ProblemList({ problems }) {
  if (!problems.length) {
    return (
      <div className="flex items-center justify-center py-20">
        <h2 className="text-xl text-gray-500">
          No Problems Found
        </h2>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {problems.map((problem) => (
        <ProblemCard
          key={problem._id}
          problem={problem}
        />
      ))}
    </div>
  );
}
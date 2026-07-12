import { useProblems } from "../../context/ProblemContext";

export default function ProblemSidebar() {
  const {
    problems,
    selectedProblem,
    setSelectedProblem,
  } = useProblems();

  return (
    <div className="h-full overflow-y-auto border-r">

      {problems.map((problem) => (

        <button
          key={problem._id}
          onClick={() => setSelectedProblem(problem)}
          className={`w-full p-4 text-left border-b hover:bg-gray-100 ${
            selectedProblem?._id === problem._id
              ? "bg-blue-100"
              : ""
          }`}
        >

          <h3 className="font-semibold">
            {problem.title}
          </h3>

          <p className="text-sm">
            {problem.difficulty}
          </p>

        </button>

      ))}

    </div>
  );
}
import { useNavigate } from "react-router-dom";

export default function ProblemCard({ problem }) {
  const navigate = useNavigate();

  const difficultyColors = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-xl shadow border p-6 hover:shadow-lg transition">

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-semibold">
          {problem.title}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            difficultyColors[problem.difficulty]
          }`}
        >
          {problem.difficulty}
        </span>

      </div>

      <p className="mt-3 text-gray-600">
        {problem.category}
      </p>

      <div className="flex gap-2 mt-3 flex-wrap">
        {problem.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2 mt-3 flex-wrap">
        {problem.companies.map((company) => (
          <span
            key={company}
            className="bg-gray-200 px-2 py-1 rounded text-xs"
          >
            {company}
          </span>
        ))}
      </div>

      <button
        onClick={() => navigate(`/compiler/${problem._id}`)}
        className="mt-6 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
      >
        Solve Problem
      </button>
    </div>
  );
}
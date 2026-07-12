import { useEffect, useMemo, useState } from "react";

import { getAllProblems } from "../../services/problemApi";

import ProblemSearch from "../../components/problems/ProblemSearch";
import ProblemFilters from "../../components/problems/ProblemFilters";
import ProblemList from "../../components/problems/ProblemList";

export default function Problems() {

  const [problems, setProblems] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [difficulty, setDifficulty] = useState("All");

  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const data = await getAllProblems();

        setProblems(data.problems);

      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    };

    fetchProblems();
  }, []);

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {

      const matchesSearch =
        problem.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesDifficulty =
        difficulty === "All" ||
        problem.difficulty === difficulty;

      const matchesCategory =
        category === "All" ||
        problem.category === category;

      return (
        matchesSearch &&
        matchesDifficulty &&
        matchesCategory
      );
    });
  }, [problems, search, difficulty, category]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        Loading Problems...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        Problems
      </h1>

      <div className="space-y-5">

        <ProblemSearch
          search={search}
          setSearch={setSearch}
        />

        <ProblemFilters
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          category={category}
          setCategory={setCategory}
        />

        <ProblemList
          problems={filteredProblems}
        />

      </div>

    </div>
  );
}
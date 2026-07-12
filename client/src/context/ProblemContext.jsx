import { createContext, useContext, useEffect, useState } from "react";
import { getAllProblems } from "../services/problemApi";

const ProblemContext = createContext();

export const ProblemProvider = ({ children }) => {
  const [problems, setProblems] = useState([]);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProblems();
  }, []);

  const loadProblems = async () => {
    try {
      const data = await getAllProblems();
      setProblems(data.problems);

      if (data.problems.length > 0) {
        setSelectedProblem(data.problems[0]);
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <ProblemContext.Provider
      value={{
        problems,
        selectedProblem,
        setSelectedProblem,
        loading,
      }}
    >
      {children}
    </ProblemContext.Provider>
  );
};

export const useProblems = () => useContext(ProblemContext);
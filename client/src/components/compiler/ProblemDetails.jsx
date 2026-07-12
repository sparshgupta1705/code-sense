import { useProblems } from "../../context/ProblemContext";

export default function ProblemDetails() {

    const { selectedProblem } = useProblems();

    if (!selectedProblem)
        return null;

    return (

        <div className="p-6 overflow-y-auto">

            <h1 className="text-3xl font-bold">

                {selectedProblem.title}

            </h1>

            <div className="mt-2 flex gap-3">

                <span>

                    {selectedProblem.difficulty}

                </span>

                <span>

                    {selectedProblem.category}

                </span>

            </div>

            <p className="mt-6 whitespace-pre-line">

                {selectedProblem.description}

            </p>

            <h2 className="mt-8 text-xl font-semibold">

                Constraints

            </h2>

            <p>

                {selectedProblem.constraints}

            </p>

        </div>

    );

}
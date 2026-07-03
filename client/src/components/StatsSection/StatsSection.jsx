import { Code2, BrainCircuit, Users, Trophy } from "lucide-react";

const stats = [
  {
    icon: <Code2 size={36} />,
    number: "500+",
    title: "Coding Problems",
    color: "text-blue-400",
  },
  {
    icon: <BrainCircuit size={36} />,
    number: "10K+",
    title: "AI Reviews",
    color: "text-purple-400",
  },
  {
    icon: <Users size={36} />,
    number: "2K+",
    title: "Students",
    color: "text-green-400",
  },
  {
    icon: <Trophy size={36} />,
    number: "98%",
    title: "Prediction Accuracy",
    color: "text-yellow-400",
  },
];

function StatsSection() {
  return (
    <section className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-white">
            Trusted by Future Developers
          </h2>

          <p className="text-gray-400 mt-4">
            Practice smarter with AI-powered coding assistance.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <div className={`flex justify-center ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="mt-5 text-4xl font-bold text-white">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-400">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default StatsSection;
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white ">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl " />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="grid w-full gap-16 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              <Sparkles size={16} />
              AI Powered Coding Assistant
            </div>

            <h1 className="text-6xl font-black leading-tight">
              Write Better
              <br />

              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                C++ Code
              </span>

              <br />

              With AI
            </h1>

            <p className="mt-8 max-w-xl text-lg text-gray-400 leading-8">
              Practice coding, generate hidden test cases,
              receive AI-powered code reviews and track
              your programming journey.
            </p>

            <div className="mt-10 flex gap-5">

              <Link
                to="/problems"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
              >
                Start Coding
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/compiler"
                className="rounded-xl border border-gray-700 px-7 py-4 font-semibold transition hover:border-blue-500"
              >
                Open Compiler
              </Link>

            </div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >

            <div className="w-full max-w-lg rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl">

              <div className="flex items-center gap-2 border-b border-gray-800 p-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <pre className="overflow-x-auto p-6 text-sm text-gray-300">
{`int main() {
    vector<int> nums;

    // AI Suggestion:
    // Handle empty vector

    cout << "Hello";
}`}
              </pre>

              <div className="border-t border-gray-800 bg-gray-950 p-5">
                <div className="flex justify-between">

                  <span className="text-green-400">
                    ✓ Complexity: O(n)
                  </span>

                  <span className="text-blue-400">
                    AI Score: 94%
                  </span>

                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
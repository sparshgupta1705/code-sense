import {
  BrainCircuit,
  Terminal,
  FlaskConical,
  LayoutDashboard,
} from "lucide-react";

import Container from "../Container/Container";
import Section from "../Section/Section";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <Section>

      <Container>

        <div className="text-center">

          <h2 className="text-white text-5xl font-bold">

            Why Choose

            <span className="text-blue-500">

              {" "}CodeSense AI

            </span>

          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">

            Everything you need to improve your coding
            skills using Artificial Intelligence.

          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          <FeatureCard
            icon={<Terminal size={42} />}
            title="Local Compiler"
            description="Run C++ code instantly without relying on external APIs."
          />

          <FeatureCard
            icon={<BrainCircuit size={42} />}
            title="AI Code Review"
            description="Receive AI-powered suggestions and identify weaknesses in your solution."
          />

          <FeatureCard
            icon={<FlaskConical size={42} />}
            title="Hidden Test Cases"
            description="Generate challenging edge cases to improve the robustness of your code."
          />

          <FeatureCard
            icon={<LayoutDashboard size={42} />}
            title="Progress Dashboard"
            description="Track solved problems, coding streaks, and performance over time."
          />

        </div>

      </Container>

    </Section>
  );
}

export default Features;
import Card from "../Card/Card";

function FeatureCard({ icon, title, description }) {
  return (
    <Card
      className="
      p-8
      hover:border-blue-500
      transition-all
      duration-300
      hover:-translate-y-2
      "
    >
      <div className="text-blue-400 mb-6">
        {icon}
      </div>

      <h3 className="text-white text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-7">
        {description}
      </p>
    </Card>
  );
}

export default FeatureCard;
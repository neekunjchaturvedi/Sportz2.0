import { useState } from "react";
import { soccerBall } from "@lucide/lab";
import { Icon } from "lucide-react";
const plans = [
  {
    name: "Basic",
    description:
      "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.",
    popular: false,
  },
  {
    name: "Premium",
    description:
      "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.",
    popular: true,
  },
  {
    name: "Pro",
    description:
      "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.",
    popular: false,
  },
];

export default function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="flex flex-col items-center py-10 ">
      <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
      <div className="flex space-x-8 mb-42 px-36">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="text-center flex flex-col items-center justify-center"
          >
            <div className="w-24 h-24 text-black rounded-full flex items-center justify-center">
              <Icon iconNode={soccerBall} size={56} />
            </div>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
      <div className="flex space-x-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative border p-6 rounded-lg cursor-pointer transition-all w-64 text-center ${
              selectedPlan === plan.name
                ? "border-blue-500 shadow-lg"
                : "border-gray-300"
            } ${plan.popular ? "border-red-500" : ""}`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-b-md">
                Popular
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <button className="bg-yellow-400 px-4 py-2 rounded-md font-bold">
              Get Started
            </button>
            <ul className="mt-4 text-gray-600 space-y-1">
              <li>✔️ Lorem ipsum dolor</li>
              <li>✔️ Lorem ipsum dolor</li>
              <li>✔️ Lorem ipsum dolor</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

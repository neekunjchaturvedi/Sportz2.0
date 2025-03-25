import { useState } from "react";
import { Check, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="flex flex-col items-center py-10 px-4 md:px-10 ">
      <h2 className="text-3xl font-extrabold mb-10 text-center">
        What We Offer
      </h2>
      <div className="flex flex-col sm:flex-row md:space-x-32 mb-24 px-4 md:px-36 space-y-8 md:space-y-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="text-center flex flex-col items-center justify-center"
          >
            <div className="w-24 h-24 text-black rounded-full flex items-center justify-center">
              <img src="/src/assets/images/football.png" alt="" />
            </div>
            <p className="mt-2 text-gray-500 w-64">
              Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 justify-start mb-24 w-4/5 md:w-2/3 ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative border-2 border-black p-6 rounded-lg transition-all w-full md:w-80 text-left ${
              plan.popular ? "border-red-500" : ""
            }`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            {plan.popular && (
              <div className="absolute top-0 left-0 right-0 bg-red-500 text-white py-2 text-center rounded-lg mb-8">
                Popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2 mt-6 px-3">{plan.name}</h3>
            <p className="text-gray-600 mb-8 px-3">{plan.description}</p>
            <Button className="bg-[#F9DC5C] px-4 py-2 rounded-md font-bold w-full cursor-pointer mb-6">
              Get Started
            </Button>
            <div className="bg-gray-300 h-0.5" />
            <ul className="mt-4 text-gray-600 space-y-4">
              <li className="flex gap-6">
                <CheckCircle /> Lorem ipsum dolor
              </li>
              <div className="bg-gray-300 h-0.5" />
              <li className="flex gap-6">
                <CheckCircle /> Lorem ipsum dolor
              </li>
              <div className="bg-gray-300 h-0.5" />
              <li className="flex gap-6">
                <CheckCircle /> Lorem ipsum dolor
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

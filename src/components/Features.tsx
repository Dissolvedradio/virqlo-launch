import React from "react";

const features = [
  {
    title: "Branded Inserts",
    description: "Fully customizable designs that match your store's unique brand identity perfectly.",
    icon: "🎨",
  },
  {
    title: "Smart Rules",
    description: "Automatically trigger specific inserts based on order value, products, or customer tags.",
    icon: "⚙️",
  },
  {
    title: "QR Codes",
    description: "Generate unique QR codes for reorders, reviews, or social media follows on every card.",
    icon: "📱",
  },
  {
    title: "Print-ready PDFs",
    description: "Get high-quality, print-ready PDFs generated instantly for your warehouse team.",
    icon: "🖨️",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-base font-semibold text-[#008060] tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            Everything you need for premium unboxing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";

const steps = [
  {
    number: "01",
    title: "Connect your Shopify store",
    description: "Install the Virqlo app with one click. We'll automatically sync your products and brand assets.",
  },
  {
    number: "02",
    title: "Set your rules",
    description: "Choose which inserts to generate for different customer segments or purchase behaviors.",
  },
  {
    number: "03",
    title: "Print and pack",
    description: "Download your batch-ready PDFs and include them in your next shipment. It's that simple.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-base font-semibold text-[#008060] tracking-wide uppercase">Process</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            Set it up in minutes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-black text-gray-50 mb-6 absolute -top-10 -left-4 -z-10">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

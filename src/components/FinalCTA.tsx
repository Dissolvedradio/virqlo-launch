import React from "react";
import { Button } from "./Button";

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-[#008060]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Start turning orders into repeat customers
        </h2>
        <Button 
          href="https://apps.shopify.com/virqlo" 
          variant="secondary" 
          className="text-[#008060] px-12 py-5 text-xl font-bold hover:bg-gray-100"
        >
          Install on Shopify
        </Button>
      </div>
    </section>
  );
};

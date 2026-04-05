import React from "react";
import { Button } from "./Button";
import { ShopifyInstallButton } from "./ShopifyInstallButton";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Turn every order into a{" "}
              <span className="text-[#008060]">repeat customer</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-lg">
              Automatically generate branded thank-you cards, discount inserts,
              and QR codes for every order.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <ShopifyInstallButton className="px-10 py-4 text-lg">
                Install on Shopify
              </ShopifyInstallButton>
              <Button
                href="#demo"
                variant="secondary"
                className="px-10 py-4 text-lg"
              >
                View demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-sm ml-auto transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-12 h-1 bg-[#008060] mb-6" />
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-500 text-sm mb-6">
                  We hope you love your order. Here's 15% off your next
                  purchase.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300 text-center font-mono text-xl font-bold text-gray-800">
                  LOYALTY15
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-sm transform rotate-6 hover:rotate-0 transition-transform duration-500 -mt-12">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold">Quick Reorder</h3>
                    <p className="text-gray-500 text-xs mt-1">
                      Scan to get this again
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="w-10 h-10 border-2 border-white grid grid-cols-2 gap-1 p-1">
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                    </div>
                  </div>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full mb-2" />
                <div className="h-2 w-2/3 bg-gray-100 rounded-full" />
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#008060]/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
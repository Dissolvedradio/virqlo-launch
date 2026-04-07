import React from "react";

export const Hero = () => {
  const handleEarlyAccessClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdoD_5x1drLVa50oeeOTMDTrjSw-1mBHgLLqBSLzCvpIls_Tg/viewform",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-600">
              Shopify insert automation for growing brands
            </div>

            <h1 className="mt-6 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.05]">
              Turn every order into a{" "}
              <span className="text-[#008060]">repeat customer</span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-xl">
              Virqlo helps Shopify stores automatically generate branded thank-you
              cards, discount inserts, and QR-ready packing material for every
              order.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <button
                type="button"
                onClick={handleEarlyAccessClick}
                className="inline-flex items-center justify-center rounded-xl bg-[#008060] px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-[#006e52]"
              >
                Get early access
              </button>

              <div className="text-sm text-gray-500">
                Limited beta access for early Shopify brands
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#008060]" />
                Branded inserts
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#008060]" />
                Rule-based automation
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#008060]" />
                QR-ready promotions
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#008060]/15 via-transparent to-[#008060]/5 blur-2xl" />

            <div className="relative rounded-[2rem] border border-gray-200 bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Virqlo dashboard</p>
                  <h3 className="mt-1 text-xl font-semibold text-gray-900">
                    Insert automation preview
                  </h3>
                </div>

                <div className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  Live rule
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Automation rule
                      </p>
                      <p className="mt-2 text-base font-semibold text-gray-900">
                        Orders over $75
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        Automatically include a premium thank-you insert with a
                        10% repeat-purchase offer.
                      </p>
                    </div>

                    <div className="rounded-xl bg-white px-3 py-2 text-right shadow-sm ring-1 ring-gray-200">
                      <p className="text-xs text-gray-500">Trigger rate</p>
                      <p className="text-lg font-semibold text-gray-900">87%</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Generated insert
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Branded card sent with qualifying orders
                      </p>
                    </div>

                    <div className="rounded-lg border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600">
                      Template A
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#008060]">
                          Thank you
                        </p>
                        <h4 className="mt-2 text-2xl font-bold text-gray-900">
                          Enjoy 10% off your next order
                        </h4>
                        <p className="mt-2 max-w-xs text-sm text-gray-600">
                          Reward repeat customers automatically with a polished,
                          on-brand insert inside every qualifying package.
                        </p>
                      </div>

                      <div className="hidden sm:flex h-24 w-24 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white text-[10px] font-medium tracking-[0.2em] text-gray-400">
                        QR CODE
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <div className="inline-flex rounded-xl bg-[#008060] px-4 py-2 text-sm font-semibold text-white">
                        SAVE10
                      </div>

                      <div className="text-xs text-gray-500">
                        Auto-generated per rule
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Inserts today
                    </p>
                    <p className="mt-2 text-2xl font-bold text-gray-900">124</p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Rules triggered
                    </p>
                    <p className="mt-2 text-2xl font-bold text-gray-900">87%</p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Repeat lift
                    </p>
                    <p className="mt-2 text-2xl font-bold text-gray-900">32%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
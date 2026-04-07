import ShopifyInstallButton from "./ShopifyInstallButton";

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

            <div className="mt-8">
              <ShopifyInstallButton />
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 text-center min-h-[320px] flex items-center justify-center">
              <p className="text-gray-500">[Insert Product Preview Here]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
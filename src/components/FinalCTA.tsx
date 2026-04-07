import ShopifyInstallButton from "./ShopifyInstallButton";

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-[#008060]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Start turning orders into repeat customers
        </h2>

        <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">
          Connect your store, automate branded inserts, and make every shipment
          work harder for retention.
        </p>

        <div className="mt-8 flex justify-center">
          <ShopifyInstallButton
            className="w-full max-w-xl justify-center"
            inputClassName="bg-white"
            buttonClassName="whitespace-nowrap"
          />
        </div>
      </div>
    </section>
  );
};
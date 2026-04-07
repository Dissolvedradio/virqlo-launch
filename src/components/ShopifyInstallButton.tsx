"use client";

type ShopifyInstallButtonProps = {
  className?: string;
  buttonClassName?: string;
  inputClassName?: string;
  compact?: boolean;
  children?: React.ReactNode;
};

export default function ShopifyInstallButton({
  className = "",
  buttonClassName = "",
  compact = false,
  children = "Get early access",
}: ShopifyInstallButtonProps) {
  const handleClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdoD_5x1drLVa50oeeOTMDTrjSw-1mBHgLLqBSLzCvpIls_Tg/viewform",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className={`flex items-center ${className}`}>
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex items-center justify-center rounded-xl bg-[#008060] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#006e52] ${buttonClassName}`}
      >
        {children}
      </button>
    </div>
  );
}
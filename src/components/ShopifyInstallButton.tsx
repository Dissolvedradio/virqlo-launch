"use client";

import React from "react";

type ShopifyInstallButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export const ShopifyInstallButton = ({
  className = "",
  children = "Install on Shopify",
}: ShopifyInstallButtonProps) => {
  const handleClick = () => {
    const input = window.prompt(
      "Enter your Shopify store domain (example: your-store.myshopify.com)"
    );

    if (!input) return;

    let shop = input.trim().toLowerCase();
    shop = shop.replace(/^https?:\/\//, "");
    shop = shop.replace(/\/.*$/, "");

    if (!shop.endsWith(".myshopify.com")) {
      shop = `${shop}.myshopify.com`;
    }

    window.location.href = `https://virqlo-production.up.railway.app/auth?shop=${encodeURIComponent(
      shop
    )}`;
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-xl bg-[#008060] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#006e52] ${className}`}
    >
      {children}
    </button>
  );
};
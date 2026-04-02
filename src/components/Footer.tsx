import React from "react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Virqlo</div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Virqlo. All rights reserved. Built for Shopify.
          </div>
        </div>
      </div>
    </footer>
  );
};

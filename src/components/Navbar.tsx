import ShopifyInstallButton from "./ShopifyInstallButton";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-xl font-bold text-gray-900">Virqlo</div>

        <div className="hidden lg:block">
          <ShopifyInstallButton compact />
        </div>
      </div>
    </nav>
  );
};
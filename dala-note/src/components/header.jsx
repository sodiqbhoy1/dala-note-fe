import { Bell, Sun, Search, UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <h2 className="text-5xl font-bold">Welcome Back</h2>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="rounded-lg bg-gray-100 px-3 py-2 pl-8 text-sm"
          />
          <Search className="absolute left-2 top-2.5 text-gray-300" size={18} />
        </div>
        <Sun className="cursor-pointer text-gray-600" />
        <Bell className="cursor-pointer text-gray-600" />
        <UserCircle className="cursor-pointer text-gray-600" />
      </div>
    </header>
  );
};

export default Header;

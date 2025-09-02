import { Home, FileText, Mic, ScanLine, Upload, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import HelpCenter from "./helpcenter";

const Sidebar = () => {
  const menu = [
    { icon: <Home size={20} />, label: "Home", path: "/" },
    { icon: <FileText size={20} />, label: "Notes", path: "/notes" },
    { icon: <Mic size={20} />, label: "Record", path: "/record" },
    { icon: <ScanLine size={20} />, label: "OCR Scan", path: "/ocr-scan" },
    { icon: <Upload size={20} />, label: "Uploads", path: "/uploads" },
    { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
  ];

  return (
    <aside
      className="w-[222px] h-screen border-r border-gray-300 flex flex-col justify-between bg-white p-6 overflow-hidden"
    >
      {/* Logo + Navigation */}
      <div>
        <h1 className="text-xl font-bold mb-10">DALA NOTE</h1>
        <nav className="flex flex-col gap-3">
          {menu.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 transition-colors ${
                  isActive ? "bg-blue-500 text-white hover:bg-blue-600" : ""
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Help Center at the bottom inside sidebar */}
      <HelpCenter />
    </aside>
  );
};

export default Sidebar;
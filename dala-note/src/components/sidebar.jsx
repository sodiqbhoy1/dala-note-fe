import { Home, FileText, Mic, ScanLine, Upload, Settings } from "lucide-react";
import HelpCenter from "./helpcenter";

const Sidebar = () => {
  const menu = [
    { icon: <Home size={20} />, label: "Home" },
    { icon: <FileText size={20} />, label: "Notes" },
    { icon: <Mic size={20} />, label: "Record" },
    { icon: <ScanLine size={20} />, label: "OCR Scan" },
    { icon: <Upload size={20} />, label: "Uploads" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <aside
      className="w-[222px] h-screen border-r border-gray-300 flex flex-col justify-between bg-white p-6"
    >
      {/* Logo + Navigation */}
      <div>
        <h1 className="text-xl font-bold mb-10">DALA NOTE</h1>
        <nav className="flex flex-col gap-3">
          {menu.map((item, idx) => (
            <button
              key={idx}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 ${
                idx === 0 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Help Center at the bottom inside sidebar */}
      <HelpCenter />
    </aside>
  );
};

export default Sidebar;

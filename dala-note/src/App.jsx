import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import Notes from "./pages/notes";
import Record from "./pages/record";
import OCRScan from "./pages/ocr-scan";
import Uploads from "./pages/uploads";
import Settings from "./pages/settings";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Persistent Sidebar */}
        <Sidebar />
        
        {/* Main Content Area - Changes based on route */}
        <div className="flex-1 h-screen overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/record" element={<Record />} />
            <Route path="/ocr-scan" element={<OCRScan />} />
            <Route path="/uploads" element={<Uploads />} />
            <Route path="/settings" element={<Settings />} />
            {/* Fallback route */}
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
import Header from "../components/header";
import ActionCard from "../components/actioncard";
import NotesSection from "../components/notesection";
import ActivityCard from "../components/ActivityCard";
import { Plus, Mic, Upload, Scan } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        <ActionCard
          Icon={Plus}
          title="New Note"
          subtitle="Type your thoughts instantly"
          link="/notes"
        />
        <ActionCard
          Icon={Mic}
          title="Record Audio"
          subtitle="Turn speech into text"
          link="/record"
        />
        <ActionCard
          Icon={Scan}
          title="Scan Document"
          subtitle="Convert images to notes"
          link="/ocr-scan"
        />
        <ActionCard
          Icon={Upload}
          title="Upload File"
          subtitle="Import and transform your docs"
          link="/uploads"
        />
      </div>

      {/* Notes Section */}
      <div className="px-6">
        <NotesSection />
      </div>

      {/* Recent Activity */}
      <div className="px-6 mt-8">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ActivityCard title="Audio processed" time="12:30 PM" />
          <ActivityCard title="OCR scan complete" time="12:30 PM" />
          <ActivityCard title="Audio processed" time="12:30 PM" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
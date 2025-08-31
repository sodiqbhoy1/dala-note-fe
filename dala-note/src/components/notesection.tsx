import { Heart, Upload, User,  Trash2, Edit, LayoutGrid } from "lucide-react";
import { useState } from "react";

const NotesSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Fake notes data
  const notes = [
    {
      id: 1,
      title: "My ideas go here",
      content:
        "Le soleil brillait doucement à travers les fenêtres du café, illuminant les pages de mon carnet. J’ai noté des idées pour de futurs projets, des pensées vagues qui pourraient un jour devenir quelque chose de grand. Les gens autour de moi parlaient doucement, et le parfum du café fraîchement moulu emplissait l’air.",
      date: "11th Aug 25",
      time: "1hr ago",
    },
    {
      id: 2,
      title: "My ideas go here",
      content:
        "Le soleil brillait doucement à travers les fenêtres du café, illuminant les pages de mon carnet. J’ai noté des idées pour de futurs projets, des pensées vagues qui pourraient un jour devenir quelque chose de grand. Les gens autour de moi parlaient doucement, et le parfum du café fraîchement moulu emplissait l’air.",
      date: "11th Aug 25",
      time: "1hr ago",
    },
    {
      id: 3,
      title: "My ideas go here",
      content:
        "Le soleil brillait doucement à travers les fenêtres du café, illuminant les pages de mon carnet. J’ai noté des idées pour de futurs projets, des pensées vagues qui pourraient un jour devenir quelque chose de grand. Les gens autour de moi parlaient doucement, et le parfum du café fraîchement moulu emplissait l’air.",
      date: "11th Aug 25",
      time: "1hr ago",
    },
    {
      id: 4,
      title: "My ideas go here",
      content:
        "Le soleil brillait doucement à travers les fenêtres du café, illuminant les pages de mon carnet. J’ai noté des idées pour de futurs projets, des pensées vagues qui pourraient un jour devenir quelque chose de grand. Les gens autour de moi parlaient doucement, et le parfum du café fraîchement moulu emplissait l’air.",
      date: "11th Aug 25",
      time: "1hr ago",
    },
    {
      id: 5,
      title: "My ideas go here",
      content:
        "Le soleil brillait doucement à travers les fenêtres du café, illuminant les pages de mon carnet. J’ai noté des idées pour de futurs projets, des pensées vagues qui pourraient un jour devenir quelque chose de grand. Les gens autour de moi parlaient doucement, et le parfum du café fraîchement moulu emplissait l’air.",
      date: "11th Aug 25",
      time: "1hr ago",
    },
    {
      id: 6,
      title: "My ideas go here",
      content:
        "Le soleil brillait doucement à travers les fenêtres du café, illuminant les pages de mon carnet. J’ai noté des idées pour de futurs projets, des pensées vagues qui pourraient un jour devenir quelque chose de grand. Les gens autour de moi parlaient doucement, et le parfum du café fraîchement moulu emplissait l’air.",
      date: "11th Aug 25",
      time: "1hr ago",
    },
  ];

  // Tabs
  const tabs = ["All Notes", "Recent", "Favorite", "Trash"];

  return (
    <div className="px-6">
      {/* Tabs */}
      <div className="flex items-center gap-6 border-b pb-2 mb-4 text-gray-600 font-medium">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 pb-1 ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}

        <button className="flex items-center gap-2 ml-auto">
          <LayoutGrid size={18} />
        </button>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div key={note.id} className="bg-white rounded-xl p-4 shadow border">
            {/* Title + Edit icon */}
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold">{note.title}</h4>
              <Edit
                size={18}
                className="text-gray-600 cursor-pointer hover:text-blue-600"
              />
            </div>

            {/* Date + Time */}
            <div className="text-gray-500 text-sm mb-2">
              <span>{note.date}</span>
              <span className="ml-3">{note.time}</span>
            </div>

            {/* Content */}
            <p className="text-gray-600 text-sm mb-4">{note.content}</p>

            {/* Footer actions */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2 text-gray-600">
                <Heart size={18} />
                <User size={18} />
              </div>
              <div className="flex gap-2 text-gray-600">
                 <Upload size={18} />
                <Trash2 size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesSection;

import Header from "../components/header";
import NotesSection from "../components/notesection";

const Notes = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">All Notes</h2>
        <p className="text-gray-600 mb-6">Manage and organize all your notes here.</p>
        
        {/* Add the notes section component for demonstration */}
        <NotesSection />
        
        {/* Add some extra content to demonstrate scrolling */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Additional Content</h3>
          <div className="space-y-4">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow border">
                <h4 className="font-medium mb-2">Sample Note {i + 1}</h4>
                <p className="text-gray-600 text-sm">
                  This is additional content to demonstrate the scrolling functionality. 
                  The sidebar remains fixed while this content area can be scrolled vertically.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
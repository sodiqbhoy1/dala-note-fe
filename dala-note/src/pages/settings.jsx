import Header from "../components/header";

const Settings = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <p className="text-gray-600">Configure your application settings.</p>
      </div>
    </div>
  );
};

export default Settings;
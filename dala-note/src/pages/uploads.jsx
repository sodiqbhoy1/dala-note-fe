import Header from "../components/header";

const Uploads = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Uploads</h2>
        <p className="text-gray-600">Manage your uploaded files here.</p>
      </div>
    </div>
  );
};

export default Uploads;
import Header from "../components/header";

const OCRScan = () => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">OCR Scan</h2>
        <p className="text-gray-600">Scan documents and convert to text.</p>
      </div>
    </div>
  );
};

export default OCRScan;
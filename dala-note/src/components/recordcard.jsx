import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { HiOutlineMicrophone } from "react-icons/hi";
import Button from "./button";
import RecordModal from "./recordmodal";
import { useState, useRef } from "react";

const Recordcard = () => {
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef(null);

  const handleSelectFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  /* const handleRecordAudio = () => {
    setIsRecording(true);
  }; */

  return (
    <div className="p-6 flex items-center justify-center flex-grow">
      {showModal ? (
        <RecordModal onClose={() => setShowModal(false)} />
      ) : (
        <>
          <div className="border-dashed flex flex-col items-center justify-center border-4 border-gray-300 rounded-lg p-10 space-y-4">
            <MdOutlineFileUpload size={30} />
            <p>Upload audio file</p>
            <p>Drag and drop your audio file here or click to select</p>
            <span className="flex flex-row items-center text-center gap-10">
              <Button
                style={"bg-[#00AEEF] text-white "}
                icon={<MdOutlineFileUpload size={30} />}
                text="Select File"
                onClick={handleSelectFile}
              />
              <input
                ref={fileInputRef}
                id="audio-upload"
                type="file"
                accept="audio/*"
                className="hidden"
              />

              <Button
                onClick={() => setShowModal(true)}
                style={"border"}
                icon={<HiOutlineMicrophone size={30} />}
                text="Record Audio"
              />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Recordcard;

import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

const RecordModal = ({ onClose }) => {
  return (
    <div className="p-6 flex items-center justify-center flex-grow">
      <div className="bg-white rounded-lg h-[80vh] w-full flex flex-col p-6 shadow-lg">
        <span className="flex flex-row justify-between text-center items-center ">
          <IoSettingsOutline
            size={30}
            style={{
              cursor: "pointer",
              borderRadius: "25%",
              border: "2px solid black",
              padding: "4px",
            }}
          />

          <IoCloseSharp
            onClick={onClose}
            size={30}
            color="black"
            style={{
              cursor: "pointer",
              borderRadius: "25%",
              border: "2px solid black",
              padding: "4px",
            }}
          />
        </span>
        <p className="text-gray-600 text-center mt-20">Listening...</p>
      </div>
    </div>
  );
};

export default RecordModal;

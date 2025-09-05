import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import recognition from "../logic/voiceRecord";

const RecordModal = ({ onClose }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [note, setNote] = useState("");
  const [noteStore, setNoteStore] = useState([]);

  useEffect(() => {
    if (!isRecording) return;

    // Set up result handler
    recognition.onresult = function (event) {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        transcript += event.results[i][0].transcript;
      }
      setNote(transcript);
    };

    recognition.onerror = function (event) {
      console.error("Error occurred in recognition: " + event.error);
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, [isRecording]);

  const startRecordController = () => {
    setIsRecording(true);
  };

  const stopRecordController = () => {
    setIsRecording(false);
  };

  const storeNote = () => {
    setNoteStore([...noteStore, note]);
    setNote("");
  };

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
        <div className="flex flex-col items-center mt-20 gap-4">
          {isRecording ? (
            <>
              <p className="text-gray-600 text-center">Listening...</p>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={stopRecordController}
              >
                Stop Recording
              </button>
            </>
          ) : (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={startRecordController}
            >
              Start Recording
            </button>
          )}
          <textarea
            className="w-full mt-4 p-2 border rounded"
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Your note will appear here..."
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={storeNote}
            disabled={!note}
          >
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordModal;

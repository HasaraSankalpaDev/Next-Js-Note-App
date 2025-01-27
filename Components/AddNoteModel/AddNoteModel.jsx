import React from "react";
import { IoMdClose } from "react-icons/io";

const AddNoteModel = ({ handleClosePopup }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold ">Add New Note</h2>
          <IoMdClose
            className="text-xl hover:cursor-pointer"
            onClick={handleClosePopup}
          />
        </div>
        <input
          className="w-full border rounded p-2 mb-4"
          placeholder="Write Your Note Title..."
        ></input>
        <textarea
          className="w-full h-32 border rounded p-2 mb-2"
          placeholder="Write Your Note Here..."
        ></textarea>
        <input
          className="w-full border rounded p-2 mb-6"
          type="date"
          placeholder="Write Your Note Title..."
        ></input>
        <div className="flex justify-end gap-4">
          <button
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
            onClick={handleClosePopup}
          >
            Cancel
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModel;

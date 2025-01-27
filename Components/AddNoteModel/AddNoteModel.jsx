import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";

const AddNoteModel = ({ handleClosePopup }) => {
  const [data, setData] = useState({
    title: "",
    content: "",
    date: "",
  });

  // Input Handler
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/API/AddNote", {
        title: data.title,
        content: data.content,
        date: data.date,
      });

      if (response) {
        toast.success("Note Saved Successfully!");
        handleClosePopup();

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      toast.error("Error While Saving Note!");
    }
  };

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
        <form onSubmit={handleSubmit}>
          <input
            className="w-full border rounded p-2 mb-4"
            placeholder="Write Your Note Title..."
            onChange={handleChange}
            name="title"
            value={data.title}
            required
          ></input>
          <textarea
            className="w-full h-32 border rounded p-2 mb-2"
            placeholder="Write Your Note Here..."
            name="content"
            value={data.content}
            onChange={handleChange}
            required
          ></textarea>
          <input
            className="w-full border rounded p-2 mb-6"
            type="date"
            placeholder="Write Your Note Title..."
            name="date"
            value={data.date}
            onChange={handleChange}
            required
          ></input>
          <div className="flex justify-end gap-4">
            <button
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
              onClick={handleClosePopup}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNoteModel;

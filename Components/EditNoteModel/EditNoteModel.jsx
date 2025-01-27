"use client";
import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";

const EditNoteModel = ({ handleClosePopup, date, title, content, id }) => {
  const [data, setData] = useState({
    title: "",
    content: "",
    date: "",
  });

  // Sync props with state on component mount
  useEffect(() => {
    setData({ title, content, date });
  }, [title, content, date]);

  // Input Handler
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put("http://localhost:3000/API/AddNote", {
        id: id,
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
          <h2 className="text-lg font-bold">Edit Note</h2>
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
            type="text"
          />
          <textarea
            className="w-full h-32 border rounded p-2 mb-2"
            placeholder="Write Your Note Here..."
            onChange={handleChange}
            name="content"
            value={data.content}
          ></textarea>
          <input
            className="w-full border rounded p-2 mb-6"
            type="date"
            onChange={handleChange}
            name="date"
            value={data.date}
          />
          <div className="flex justify-end gap-4">
            <button
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
              onClick={handleClosePopup}
              type="button"
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

export default EditNoteModel;

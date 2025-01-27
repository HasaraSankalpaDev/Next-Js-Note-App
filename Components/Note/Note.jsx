"use client";
import React from "react";
import { useState } from "react";
import EditNoteModel from "../EditNoteModel/EditNoteModel";
import { toast } from "react-toastify";
import axios from "axios";

const Note = ({ title, content, date, id }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleEditNoteClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Format date to "YYYY-MM-DD" format
  const formatDate = (isoDate) => {
    const dateObject = new Date(isoDate);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Add leading zero for months
    const day = String(dateObject.getDate()).padStart(2, "0"); // Add leading zero for days
    return `${year}-${month}-${day}`;
  };

  // Handle Delete Function
  const handleDeleteNote = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/API/AddNote?id=${id}`
      );
      if (response.data.success === true) {
        toast.error("Note Deleted Successfully!");

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      key={id}
      className="bg-white shadow-lg rounded-xl p-4 border hover:shadow-xl transition-shadow"
    >
      <h4 className="text-sm text-gray-500 text-end mb-3">
        {formatDate(date)}
      </h4>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex justify-between">
        <button
          onClick={handleEditNoteClick}
          className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => handleDeleteNote(id)}
          className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
      {isPopupOpen && (
        <EditNoteModel
          handleClosePopup={handleClosePopup}
          date={noteData.date}
          title={noteData.title}
          content={noteData.content}
        />
      )}
    </div>
  );
};

export default Note;

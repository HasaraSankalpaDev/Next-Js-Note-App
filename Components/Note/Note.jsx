"use client";
import React from "react";
import { useState } from "react";
import EditNoteModel from "../EditNoteModel/EditNoteModel";

const Note = ({ index }) => {
  // Data Set
  const [noteData, setNoteData] = useState({
    title: "Note Title is long Here",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2024/05/05",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleEditNoteClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div
      key={index}
      className="bg-white shadow-lg rounded-xl p-4 border hover:shadow-xl transition-shadow"
    >
      <h4 className="text-sm text-gray-500 text-end mb-3">{noteData.date}</h4>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{noteData.title}</h2>
      <p className="text-gray-600 mb-4">{noteData.content}</p>
      <div className="flex justify-between">
        <button
          onClick={handleEditNoteClick}
          className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition"
        >
          Edit
        </button>
        <button className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition">
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

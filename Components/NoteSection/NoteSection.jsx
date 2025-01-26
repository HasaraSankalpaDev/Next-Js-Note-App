"use client";
import React, { useState } from "react";
import Note from "../Note/Note";
import AddNoteModel from "../AddNoteModel/AddNoteModel";

const NoteSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddNoteClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div className="bg-gray-100 p-6">
        <button
          className="my-6 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition block mx-auto"
          onClick={handleAddNoteClick}
        >
          Add New Note
        </button>
        <h1 className="text-xl font-bold mb-6 text-center">My Notes</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-8">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Note key={index} index={index} />
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && <AddNoteModel handleClosePopup={handleClosePopup} />}
    </div>
  );
};

export default NoteSection;

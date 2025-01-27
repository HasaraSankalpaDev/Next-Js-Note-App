"use client";
import React, { useEffect, useState } from "react";
import Note from "../Note/Note";
import AddNoteModel from "../AddNoteModel/AddNoteModel";
import axios from "axios";

const NoteSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  const fetchNote = async () => {
    const response = await axios.get("http://localhost:3000/API/AddNote/");
    setNotes(response.data.notes);
    console.log(response.data.notes);
  };

  const handleAddNoteClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <div>
      <div className="bg-gray-100 p-6">
        <button
          className="my-6 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition block mx-auto"
          onClick={handleAddNoteClick}
        >
          Add New Note
        </button>
        <h1 className="text-lg font-bold mb-6 text-center">My Notes</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-8">
          {notes.map((item, index) => {
            return (
              <Note
                id={item._id}
                title={item.title}
                content={item.content}
                date={item.date}
              />
            );
          })}
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && <AddNoteModel handleClosePopup={handleClosePopup} />}
    </div>
  );
};

export default NoteSection;

import mongoose, { Schema } from "mongoose";

const notesSchema = new mongoose.Schema({
  title: { type: String, require: true },
  content: { type: String, require: true },
  date: { type: Date, default: Date.now },
});

const NoteModel = mongoose.models.Notes || mongoose.model("Notes", notesSchema);
export default NoteModel;

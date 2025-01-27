import NoteModel from "@/Lib/Models/NoteModel.js/Note";
import { NextResponse } from "next/server";
import { connectDB } from "@/Lib/Config/DB.cfg";

// API Endpoint to Get Notes

export async function GET(request) {
  await connectDB();

  try {
    const { searchParams } = new URL(request.url);
    const noteId = searchParams.get("id");

    if (noteId) {
      // Find a user by the provided ID
      const note = await NoteModel.findById(noteId);
      if (!note) {
        return NextResponse.json(
          { success: false, msg: "Note not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, msg: "Note Found", note });
    } else {
      // Find all users if no ID is provided
      const notes = await NoteModel.find({});
      return NextResponse.json({ success: true, msg: "Notes Found", notes });
    }
  } catch (error) {
    console.error("Error fetching Notes:", error);
    return NextResponse.json(
      { success: false, msg: "Failed to fetch Notes" },
      { status: 500 }
    );
  }
}

// API Endpoint to Add Note

export async function POST(request) {
  await connectDB();
  try {
    const requestData = await request.json();

    const noteData = {
      title: requestData.title,
      content: requestData.content,
      date: requestData.date,
    };

    await NoteModel.create(noteData);

    console.log("Note Saved");

    return NextResponse.json({
      success: true,
      msg: "Note Saved",
    });
  } catch (error) {
    console.error("Error Saving Note:", error);
    return NextResponse.json({
      success: false,
      msg: "Failed to Save Note",
      error: error.message,
    });
  }
}

// API Endpoint to Edit Notes
export async function PUT(request) {
  try {
    await connectDB();

    const requestData = await request.json();
    const { id, title, content, date } = requestData; // Destructure the request data

    const existingNote = await NoteModel.findById(id);
    if (!existingNote) {
      return NextResponse.json({ success: false, msg: "Note not found" });
    }

    const updatedData = {
      title: title || existingNote.title,
      content: content || existingNote.content,
      date: date || existingNote.date,
    };

    // Update the note in the database
    await NoteModel.findByIdAndUpdate(id, updatedData);

    return NextResponse.json({
      success: true,
      msg: "Note Updated",
    });
  } catch (error) {
    console.error("Error updating note:", error);
    return NextResponse.json({
      success: false,
      msg: "Failed to update note",
      error: error.message,
    });
  }
}

// API Endpoint to Delete Notes

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const note = await NoteModel.findById(id);
  await NoteModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Note  Deleted" });
}

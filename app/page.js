import Header from "@/Components/Header/Header";
import React from "react";
import "./index.css";
import NoteSection from "@/Components/NoteSection/NoteSection";

const page = () => {
  return (
    <div>
      <Header />
      <NoteSection />
    </div>
  );
};

export default page;

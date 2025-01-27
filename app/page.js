import Header from "@/Components/Header/Header";
import React from "react";
import "./index.css";
import NoteSection from "@/Components/NoteSection/NoteSection";
import { ToastContainer } from "react-toastify";

const page = () => {
  return (
    <div>
      <ToastContainer theme="light" />
      <Header />
      <NoteSection />
    </div>
  );
};

export default page;

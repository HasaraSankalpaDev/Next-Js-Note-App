import Header from "@/Components/Header/Header";
import React from "react";
import "./index.css";
import NoteSection from "@/Components/NoteSection/NoteSection";
import { ToastContainer } from "react-toastify";
import Footer from "@/Components/Footer/Footer";

const page = () => {
  return (
    <div>
      <ToastContainer theme="light" />
      <Header />
      <NoteSection />
      <Footer />
    </div>
  );
};

export default page;

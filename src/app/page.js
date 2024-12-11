import React from "react";
import Navbar from "./components/nabvar/page";
import Mainbar from "./components/mainbar/page";
import Skill from "./components/skills/page";
import Contact from "./components/contact/page";


export default function App() {
  return (
    <>
      <Navbar />
      <Mainbar />
      <Skill/>
    </>
  );
}

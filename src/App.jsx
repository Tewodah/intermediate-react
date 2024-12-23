import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ParentComponent from "./components/parent";
import Contact from "./components/contact";


function App() {

  return (
    <>
    <ParentComponent/>
    <Contact/>
    </>

  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Lottery from "./Lottery.jsx";
import Ticket from "./Ticket.jsx";
import { sum } from "./helper";

function App() {
  let winCondition = (tikcet) => {
    return sum(tikcet) === 10;
  };
  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;

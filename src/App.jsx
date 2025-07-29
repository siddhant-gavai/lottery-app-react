import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Lottery from "./Lottery.jsx";
import Ticket from "./Ticket.jsx";
import { sum } from "./helper";

function App() {
  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0] || sum(ticket) === 12);
  };
  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;

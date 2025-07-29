import { useState } from "react";
import "./Lottery.css";
import { generateTicket, sum } from "./helper";
import Ticket from "./Ticket.jsx";

const Lottery = ({ n = 3, winCondition }) => {
  // let [ticket, setTicket] = useState([generateTicket(3)]);
  let [ticket, setTicket] = useState(generateTicket(n));
  let isWinning = winCondition(ticket);
  // console.log("Ticket:", ticket, "→ Winning?", isWinning);

  const buyTicket = () => {
    setTicket(generateTicket(n));
  };

  return (
    <div>
      <h1>Lottery Ticket</h1>
      <Ticket ticket={ticket} />
      <br />
      <button onClick={buyTicket}>Buy Ticket! </button>
      <h3> {isWinning && "Congratulations , you won!"} </h3>
    </div>
  );
};

export default Lottery;

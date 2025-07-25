import { useState } from "react";
import "./Lottery.css";
import { generateTicket } from "./helper";

const Lottery = () => {
  let [ticket, setTicket] = useState([generateTicket(3)]);
  let isWinning = sum(ticket);

  return (
    <div>
      <h1>Lottery Ticket</h1>
      <div className="ticket">
        <span>{tickets[0]}</span>
        <span>{tickets[1]}</span>
        <span>{tickets[2]}</span>
      </div>
    </div>
  );
};

export default Lottery;

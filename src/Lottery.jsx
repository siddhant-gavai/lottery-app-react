import { useState } from "react";
import "./Lottery.css";
import { generateTicket, sum } from "./helper";

const Lottery = () => {
  // let [ticket, setTicket] = useState([generateTicket(3)]);
  let [ticket, setTicket] = useState(generateTicket(3));

  const buyTicket = () => {
    setTicket(generateTicket(3));
  };

  let isWinning = sum(ticket) === 15;

  return (
    <div>
      <h1>Lottery Ticket</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>{" "}
      <br />
      <button onClick={buyTicket}>Buy Ticket! </button>
      <h3> {isWinning && "Congratulations , you won!"} </h3>
    </div>
  );
};

export default Lottery;

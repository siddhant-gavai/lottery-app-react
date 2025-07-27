import "./Ticket.css";

import TicketNum from "./TicketNum";

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket-container">
      {ticket.map((num, index) => (
        <TicketNum key={index} num={num} />
      ))}
    </div>
  );
};

export default Ticket;

import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

// remove const mainTicketList = [ ... ]. We no longer want these.

function TicketList(props) { // Add props as parameter.
  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket, index) => // Loop through the list passed down from TicketControl.
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index} />
      )}
    </React.Fragment>
  );
}

// Add propTypes for ticketList.
TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
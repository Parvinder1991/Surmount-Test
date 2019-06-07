import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
//Should have used _get but due to time constraints not using it to exrtract deeply nested objects
const EventListRow = ({event}) => {
  console.log(event)
  return (
    <tr>
      <td>{event.name}</td>
      <td>{event.dates.start.dateTime}</td>
      <td><a href={event.url}>{event.priceRanges ? `Tickets as low as $ ${event.priceRanges[0].min}`:`Book your tickets here`} </a></td>
      <td>{event._embedded && event._embedded.venues ? `${event._embedded.venues[0].address.line1},${event._embedded.venues[0].city.name}`: ''}</td>
    </tr>
  );
};

EventListRow.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventListRow;

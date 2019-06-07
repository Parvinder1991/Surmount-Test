import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const EventListRow = ({event}) => {
  return (
    <tr>
      <td><a rel="noopener noreferrer" href={event.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/event/' + event.id}>{event.title}</Link></td>
    </tr>
  );
};

EventListRow.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventListRow;

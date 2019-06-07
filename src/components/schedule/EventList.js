import React from 'react';
import EventListRow from './EventListRow';
import PropTypes from 'prop-types';

const EventList = ({events}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      </thead>
      <tbody>
      {events.map(event =>
        <EventListRow key={event.id} event={event}/>
      )}
      </tbody>
    </table>
  );
};

EventList.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventList;

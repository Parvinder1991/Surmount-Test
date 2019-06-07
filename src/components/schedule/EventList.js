import React from 'react';
import EventListRow from './EventListRow';
import PropTypes from 'prop-types';
import moment from 'moment'

const EventList = ({events}) => {
  let rows = []
  for (let i= 0; i< 5; i++) {
    let currentDate = moment().add(i, 'days')
    let momentDate = moment().add(i, 'days').utc().format()
    rows.push(<div>
      {currentDate.utc().format('dddd, D MMMM ')}
      <table className="table">
      <thead>
      <tr>
        <th>MATCHUP</th>
        <th>TIME</th>
        <th>TICKETS</th>
        <th>LOCATION</th>

      </tr>
      </thead>
      <tbody>
      {events.map(event => {
        console.log(moment(event.dates.start.dateTime).utc().isSame(momentDate, 'day'));
        console.log(event.dates.start.dateTime, momentDate)
        return moment(event.dates.start.dateTime).utc().isSame(momentDate, 'day') ? <EventListRow key={event.id} event={event}/> : null
      }
       
      )}
      </tbody>
    </table>
    </div>)
  }
  return (
   <div>{rows}</div> 
    
  );
};

EventList.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventList;

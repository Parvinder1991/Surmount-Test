import React from 'react';
import EventListRow from './EventListRow';
import PropTypes from 'prop-types';
import moment from 'moment'

const EventList = ({startDate, endDate,events}) => {
  let rows = []
  let difference = (moment(endDate).diff(moment(startDate), 'days'))
  for (let i= 0; i < difference; i++) {
    let currentDate = moment(startDate).add(i, 'days')
    let momentDate = moment(startDate).add(i, 'days').utc().format()
    rows.push(<div style={{width: "60%"}}>
      <span style={{fontSize:"19px", fontWeight:"600", color:"burlywood"}}>{currentDate.utc().format('dddd, D MMMM ')}</span>
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

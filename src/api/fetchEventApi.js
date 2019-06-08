import delay from './delay';
import http from 'http'

const events = [];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (event) => {
  return replaceAll(event.title, ' ', '-');
};

class EventApi {
  static getAllEvents(startDate, endDate, genreId) {
    return new Promise((resolve, reject) => {
      fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=30&startDateTime=${startDate}&endDateTime=${endDate}&genreId=${genreId}&apikey=5fXAiyK6eWahj6Xoz4YhRTnhpqWBeKzp`).then((res) => {
        res.json().then(data => resolve(Object.assign([], data._embedded.events)));
      }, delay);
    });
  }
}

export default EventApi;

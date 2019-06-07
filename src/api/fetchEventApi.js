import delay from './delay';

const events = [];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (event) => {
  return replaceAll(event.title, ' ', '-');
};

class EventApi {
  static getAllEvents() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], events));
      }, delay);
    });
  }
}

export default EventApi;

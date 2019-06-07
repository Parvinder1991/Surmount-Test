import expect from 'expect';
import eventReducer from './eventReducer';
import * as actions from '../actions/eventActions';

describe('Event Reducer', () => {
  it('should add event when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newEvent = {title: 'C'};

    const action = actions.createEventSuccess(newEvent);

    //act
    const newState = eventReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update event when passed UPDATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const event = {id: 'B', title: 'New Title'};
    const action = actions.updateEventSuccess(event);

    // act
    const newState = eventReducer(initialState, action);
    const updatedEvent = newState.find(a => a.id === event.id);
    const untouchedEvent = newState.find(a => a.id === 'A');

    // assert
    expect(updatedEvent.title).toEqual('New Title');
    expect(untouchedEvent.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});

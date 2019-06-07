import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as eventActions from '../actions/eventActions';

describe('Store', function() {
  it('Should handle creating events', function() {
    // arrange
    const store = createStore(rootReducer, initialState);
    const event = {
      title: "Clean Code"
    };

    // act
    const action = eventActions.createEventSuccess(event);
    store.dispatch(action);

    // assert
    const actual = store.getState().events[0];
    const expected = {
      title: "Clean Code"
    };

    expect(actual).toEqual(expected);
  });
});

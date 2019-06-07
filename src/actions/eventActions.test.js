import expect from 'expect';
import * as eventActions from './eventActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Event Actions', () => {
  describe('createEventSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      //arrange
      const event = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        event: event
      };

      //act
      const action = eventActions.createEventSuccess(event);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

// testing thunks code below
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_EVENTS_SUCCESS when loading events', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/events')
    //   .reply(200, { body: { event: [{ id: 1, firstName: 'Cory', lastName: 'House'}] }});

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_EVENTS_SUCCESS, body: {events: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];

    const store = mockStore({events: []}, expectedActions, done);
    store.dispatch(eventActions.loadEvents()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_EVENTS_SUCCESS);
      done();
    });
  });
});

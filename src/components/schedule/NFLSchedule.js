import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventActions from '../../actions/eventActions';
import EventList from './EventList';
import {browserHistory} from 'react-router';
import PropTypes from 'prop-types';
import moment from 'moment'

class NFLSchedule extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddEventPage = this.redirectToAddEventPage.bind(this);
  }

  eventRow(event, index) {
    return <div key={index}>{event.title}</div>;
  }

  redirectToAddEventPage() {
    browserHistory.push('/event');
  }
  componentDidMount() {
    let startDate = moment().utc().format()
    let endDate = moment().add(5, 'days').utc().format()
    this.props.actions.loadEvents(startDate, endDate)
  }
  render() {
    const {events} = this.props;

    return (
      <div>
        <h1>NFL Schedule - 2019</h1>
        <EventList events={events}/>
      </div>
    );
  }
}

NFLSchedule.propTypes = {
  events: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    events: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(eventActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NFLSchedule);

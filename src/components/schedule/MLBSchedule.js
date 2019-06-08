import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventActions from '../../actions/eventActions';
import EventList from './EventList';
import {browserHistory} from 'react-router';
import PropTypes from 'prop-types';
import moment from 'moment'
import Calendar from 'react-calendar'

class NFLSchedule extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      date: new Date(),
    }
    this.redirectToNfl = this.redirectToNfl.bind(this);
    this.onChange=this.onChange.bind(this)
  }

  eventRow(event, index) {
    return <div key={index}>{event.title}</div>;
  }
  onChange (dateArray) {
    this.props.actions.loadEvents(moment(dateArray[0]).toISOString().split('.')[0]+"Z", moment(dateArray[1]).toISOString().split('.')[0]+"Z",'KnvZfZ7vAdv')
    this.setState({ date : dateArray })
  }
  redirectToNfl() {
    browserHistory.push('/nfl/schedule');
  }
  componentDidMount() {
    let startDate = moment().utc().format()
    let endDate = moment().add(5, 'days').utc().format()
    this.props.actions.loadEvents(startDate, endDate, 'KnvZfZ7vAdv')
  }
  render() {
    const {events} = this.props;
    const {date} = this.state;
    return (
      <div>
        <div>
        <span style={{"display": "inline-flex"}}><h3>MLB Schedule - 2019</h3> <a  style={{margin:"25px"}}onClick={this.redirectToNfl.bind(this)}>Switch to NFL</a></span>
        <div style ={{"float": "right", "padding": "50px"}}> 
          <Calendar
          onChange={this.onChange.bind(this)}
          value={this.state.date}
          selectRange={true}
        />
        </div>
        </div>
        <EventList startDate={date && date.length ? date[0]: moment().utc().format()} endDate={date && date.length ? date[1]: moment().add(5, 'days').utc().format()} events={events}/>
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

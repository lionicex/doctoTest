import React, { Component } from 'react';
import Schedule from '../components/Schedule';
import { today, dateRange } from '../store/actions/ScheduleAction'
import { connect } from 'react-redux';


export class ScheduleContainer extends Component {

  componentDidMount() {
    this.props.today();
    this.props.dateRange();
  }

  render() {
    console.log('ABC', this.props.week);
    console.log('ABCD', this.props.range.start);
    let range = `${this.props.range.start} - ${this.props.range.end}`;
   
    return (
      <Schedule range={range} days={this.props.week} />
    )
  }
}



const mapStateToProps = state => ({
  week: state.date.week,
  range: state.date.range
});

export default connect(mapStateToProps, { today, dateRange })(ScheduleContainer);

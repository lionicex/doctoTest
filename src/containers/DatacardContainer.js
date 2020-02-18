import React, { Component } from 'react';
import List from '../components/List';
import { connect } from 'react-redux';
import {showList} from '../store/actions/CardDataAction';
import '../styles/CardStyle.scss';

export class DatacardContainer extends Component {

  componentDidMount() {
    this.props.showList();
  }

  render() {
    return (

          <div className='container'>

            {Object.keys(this.props.list).map(index => (
              <List 
              key={index}
              icon={this.props.list[index].icon}
              type={this.props.list[index].type}
              data={this.props.list[index].data}
              />
            ))}
    
          </div>

    )
  }
}

const mapStateToProps = state => ({
  list: state.list.list
});

export default connect(mapStateToProps, {showList})(DatacardContainer);
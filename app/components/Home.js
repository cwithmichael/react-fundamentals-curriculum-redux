import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CityForm extends Component {
  constructor (props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.value); 
  }

  render() {
    return (
      <div>
      <form id="cityForm" onSubmit={this.handleSubmit}>
        <label>Enter City, State
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input 
          type="submit" 
          value="Submit">
         </input>
      </form>
      </div>
    )
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <CityForm handleSubmit={this.props.onSubmit} />
      </div>
    )
  }
}


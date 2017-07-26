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
    this.props.fetchCurrentWeather(this.state.value);
  }

  render() {
    return (
      <div id="home" className="container-fluid">
      <div className="row">
      <div className="col-md-4 col-md-offset-4">
      <form id="cityForm" onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label htmlFor="cityInput"><h1>Enter a City and State</h1></label>
        <input className="form-control" id="cityInput" type="text" value={this.state.value} onChange={this.handleChange}/>
        <button 
          type="submit" 
          className="btn btn-success">
          Get Weather 
         </button> 
        </div>
      </form>
      </div>
      </div>
      </div>
    )
  }
}

export default CityForm;

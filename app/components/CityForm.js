import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CityForm extends Component {
  constructor (props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick(event) {
    event.preventDefault();
    //this.props.fetchCurrentWeather(this.state.value);
    this.props.history.push('/forecast?city='+this.state.value);
  }

  render() {
    return (
        <div>
        <label>
          { this.props.parentName !== 'header' ? <h1>Enter City</h1> : '' }
        </label>
        <div className="input-group">
        <input 
          style={this.props.style.cityInput} 
          className="form-control" 
          type="text" 
          placeholder="Houston, Texas"
          value={this.state.value} 
          onChange={this.handleChange}/>
          <span className="input-group-btn">
          <button 
            type="submit"
            onClick={this.handleClick}
            style={this.props.style.button}
            className="btn btn-success">
            Get Weather 
           </button> 
          </span>
        </div>
        </div>
    )
  }
}

export default CityForm;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CityForm extends Component {
  constructor (props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick(event) {
    event.preventDefault();
    this.props.history.push('/forecast/' + this.state.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/forecast/' + this.state.value)
  }

  render() {
    return (
        <div>
        <label>
          { this.props.parentName !== 'header' ? <h1>Enter City and State</h1> : '' }
        </label>
        <form onSubmit={this.handleSubmit} className="input-group">
        <input
          style={this.props.style.cityInput}
          className="form-control"
          type="text"
          placeholder="Example: Houston, TX"
          value={this.state.value}
          onChange={this.handleChange}/>
          <span className="input-group-btn">
          <Link
            to={'/forecast/' + this.state.value}
            role="button"
            onClick={this.handleClick}
            style={this.props.style.button}
            className="btn btn-success">
            Get Weather
           </Link>
          </span>
        </form>
        </div>
    )
  }
}

CityForm.propTypes = {
  parentName: PropTypes.string.isRequired,
  style : PropTypes.object.isRequired,
  fetchForecastWeather : PropTypes.func.isRequired
}

export default CityForm

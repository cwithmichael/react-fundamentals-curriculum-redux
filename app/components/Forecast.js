import React from 'react';
import { Link } from 'react-router-dom';

class Forecast extends React.Component {
  render () {
    console.log("YAY!");
    let city = this.props.location.search.match(/\?city=(.*)/)[1];
    return (
      
      <Link to={'/details?city='+city}> Forecast Component </Link>
    )
  }
}

export default Forecast;

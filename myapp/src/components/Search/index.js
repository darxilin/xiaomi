import React, { Component } from 'react';
import './index.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
        666
      </div>
    );
  }
  componentDidMount(){
  	console.log(this.props.match.params)
  }
}

export default Search;
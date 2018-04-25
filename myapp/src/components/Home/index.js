import React, { Component } from 'react';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        小米商城
        <span onClick={this.handleClick.bind(this,"444")}>click</span>
      </div>
    );
  }
  handleClick(data){
  	this.props.history.push(`/search/${data}`)
  }
}

export default Home;
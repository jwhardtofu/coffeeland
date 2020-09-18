import React from 'react';
import './body.css'

class Body extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null
    }
  }

  render() {
    return (
      <div class="container">
        <img src="http://www.coffeeland.com/wp-content/uploads/2019/02/home_banner_new_01.jpg" class="image"/>
        <div class="word">The Art and Science Coffee</div>
      </div>
    )
  }
}

export default Body;
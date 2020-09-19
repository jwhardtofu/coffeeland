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
      <div class="bodyContainer">
        <div class="container">
          <img src="http://www.coffeeland.com/wp-content/uploads/2019/02/home_banner_new_01.jpg" class="image"/>
          <div class="wordContainer">
            <h2 class="word">The Art and Science of Coffee</h2>
            <p class="word2">Welcome to the next frontier in coffee</p>
          </div>
        </div>
        <div class="section2-container">
          <h2 class="section2-h2">        
            At Coffeeland, we aim to uplift everyone along the journey as we further our knowledge, science, research and expertise in our coffee. Our dedication for perfection values consistency, transparency and sustainability in every step of the process, and as we get smarter, so does our coffee. 
          </h2>
        </div>
      </div>
    )
  }
}

export default Body;
import React from 'react';
import './navbar.css';

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      logo: null,
      items: [],
      bgColor: 'transparent'
    }
    this.handleScroll = this.handleScroll.bind(this);
    
  }

  componentDidMount(){
    //console.log(this.state.logo+'ddfdf');
    /*
    fetch(".data/Navbar.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.menus,
            logo: result.logo
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        
        }
      )*/
      window.addEventListener('scroll', this.handleScroll);
    const data = {
      "logo" : "this is logo url test",
      "menus" : [
        {
          "item" : "Home",
          "url" : ""
        },
        {
          "item" : "Our History",
          "url" : ""
        }
      ]
    };

    this.setState({
      logo: data.logo,
      menus: data.menus
    })
  }

  handleScroll(){
    if (window.pageYOffset > 10){
      this.setState({
        bgColor: "#1ec5e5"
      })
    }
    else{
      this.setState({
        bgColor: "transparent"
      })
    }

  }


  render() {
    const { error, isLoaded, items, logo } = this.state;
    return (
      <div class="navbar" style={{"background-color": this.state.bgColor}}>

      <p > {logo} </p>
      </div>
    )
    
  }
}

export default Navbar;
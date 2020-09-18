import React from 'react';

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      logo: null,
      items: []
    }
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

  render() {
    const { error, isLoaded, items, logo } = this.state;
    return <p> {logo} </p>
  }
}

export default Navbar;
import React from 'react';

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      logo: 'testddd',
      items: []
    }
  }

  componentDidMount(){
    console.log(this.state.logo+'ddfdf');
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
    this.setState({
      logo: "test"
    })
  }

  render() {
    const { error, isLoaded, items, logo } = this.state;
    return <p> {logo} </p>
  }
}

export default Navbar;
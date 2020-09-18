import React from 'react';
import { Grid, Menu, MenuItem, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './navbar.css';

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

  data = {
    "logo" : "http://www.coffeeland.com/wp-content/uploads/2018/12/logo_new.png",
    "menus" : [
      {
        "item" : "HOME",
        "url" : "http://www.coffeeland.com"
      },
      {
        "item" : "OUR_STORY",
        "url" : "http://www.coffeeland.com/our-story/"
      },
      {
        "item" : "COFFEE",
        "url" : ""
      },
      {
        "item" : "EDUCATION",
        "url" : "",
        "menuItem" : [
          {
            "item" : "Coffee Courses",
            "url" : ""
          },
          {
            "item" : "SCA Track"
          }
        ]
      },
      {
        "item" : "SOLUTIONS",
        "url" : ""
      },
      {
        "item" : "PHILANTHROPY",
        "url" : "",
        "menuItem" : [
          {
            "item" : "Upcoming Events",
            "url" : ""
          },
          {
            "item" : "Journals & Articles",
            "url" : ""
          },
          {
            "item" : "Media & Videos",
            "url" : ""
          }
        ]
      },
      {
        "item" : "EVENTS",
        "url" : ""
      },
      {
        "item" : "CONTACT",
        "url" : ""
      }
    ]
  }

  componentDidMount(){
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
      logo: this.data.logo,
      items: this.data.menus
    })
  }

  render() {
    const { error, isLoaded, items, logo } = this.state;
    const classes = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      girdItem:{
       
      },
    }));
    return(
      <div className = {classes.root}>
        <Grid container spacing = {0}>
          <Grid item xs = {2}>
            <a href="#">
              <img src={logo} className={classes.img}/>
            </a>  
          </Grid>

          <Grid container item xs = {10} spacing={0}>
            <div class = 'grid-container'>
              {items.map((item) =>
                  <div key={item.item} value={item.item} class = 'grid-item'>
                    {item.menuItem === undefined ? 
                    <a href={item.url}>
                      {item.item}
                    </a> :
                    (<div>
                      {item.item}
                    </div>
                    )
                   }
                      
                  </div> 
                )}
            </div>
          </Grid>
        </Grid> 
      </div>       
    ) 
  }
}



export default Navbar;
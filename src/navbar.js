import React from 'react';
import { Grid, Menu, MenuItem, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import './navbar.css';

class HoverMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menuName: null,
      items: [],
      url: null,
      isMenuOpen: false,
      isNavBarVisiable: false
    }
    this.onMouseOver = this.onMouseOver.bind(this);
    
  }

  componentDidMount(){
    this.setState({
      menuName: this.props.item,
      items: this.props.menuItem,
      url: this.props.url
    })
  }

  onMouseOver(){
    this.setState.isMenuOpen = true;
  }


  render(){
    const {menuName, items, url, isMenuOpen} = this.state;
    return(
      <div>
        <a href={url}>
          {menuName}
        </a>
        <Menu
          open={isMenuOpen}
          
        />
        {items.map((item) => 
          <MenuItem> {item.item} </MenuItem>
        )

        }
      </div>
    )
  }
}

class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      logo: null,
      items: [],
      bgColor: 'transparent',
      logoPadding: '0',
      logoWidth: '100%',
      isNavbarOpen: false
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.onClickMenuIcon = this.onClickMenuIcon.bind(this);
    
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
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      logo: this.data.logo,
      items: this.data.menus
    })
  }

  handleScroll(){
    if (window.pageYOffset > 10){
      this.setState({
        bgColor: '#352319',
        logoPadding: '10px',
        logoWidth: '65%'
      })
    }
    else{
      this.setState({
        bgColor: 'transparent',
        logoPadding: '0',
        logoWidth: '100%'
      })
    }
  }

  onClickMenuIcon(){
    this.setState({
      isNavbarOpen: true
    });
    console.log("clicked")
  }

  render() {
    const { error, isLoaded, items, logo, bgColor, logoPadding,logoWidth } = this.state;
    const classes = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
    }));
    return(
      <div className={classes.root} class='navbar' style={{"background-color": bgColor}}>
        <div class='navbar2'>
        <Grid container spacing = {0} >
          <Grid item xs = {2} class='logoItem' >
            <a href="#">
              <img src={logo} style={{"width": logoWidth, "padding-left": logoPadding}}/>
            </a>  
          </Grid>

          <Grid item xs = {9}>
            <div class = 'grid-container'>
              {items.map((item) =>
                  <div key={item.item} value={item.item} class = 'grid-item'>
                    {item.menuItem === undefined ? 
                    <a href={item.url} class='menuItem'>
                      {item.item}
                    </a> :
                    <a href={item.url} class='menuItem'>
                      {item.item}
                    </a>
                    
                   }
                      
                  </div> 
                )}
            </div>
          </Grid>
          <Grid item xs={2} class='button-container'>
            <Button class='menuIconButton' onclick={this.onClickMenuIcon}>
              <MenuRoundedIcon />
            </Button>
          </Grid>
        </Grid> 
        </div>
        <div class='mobileMenu'>

        </div>
      </div>       
    ) 
  }
}



export default Navbar;
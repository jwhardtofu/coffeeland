import React from 'react';
import './footer.css';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            items: []
        }
    }

    componentDidMount(){
        this.setState({
          logo: this.data.logo,
          items: this.data.menus
        })
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

    render(){
        const { items } = this.state;

        return(
            <div class="container">
                <img src="http://www.coffeeland.com/wp-content/uploads/2019/01/brown_background_with_lines.jpg" class="image"/>
                <div class="grid-container"> 
                    {items.map((item) =>
                    <div key={item.item} value={item.item} class = 'grid-item'>
                        <a href={item.url} class='menuItem'>
                        {item.item}
                        </a> 
                    </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Footer;
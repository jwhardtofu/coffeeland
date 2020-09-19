import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './body.css'

class Body extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null
    }
  }

  render() {
    const classes = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
    }));
    return (
      <div  class="bodyContainer">
        <div class="container">
          <img src="http://www.coffeeland.com/wp-content/uploads/2019/02/home_banner_new_01.jpg" class="image"/>
          <div class="wordContainer">
            <h2 class="word">The Art and Science of Coffee</h2>
            <p class="word2">Welcome to the next frontier in coffee</p>
            <p  onMouseOver={this.onMouseOverButton}>
              <a class="button" href="#home_intro"> 
                LEARN MORE
              </a>
            </p>
          </div>
        </div>
        <div class="sperator">
          <img src="http://www.coffeeland.com/wp-content/uploads/2018/12/line_with_drop.png"/>
        </div>
        <div class="panel-cotainer">
          <div class="section2-container" id="home_intro">
            <h2 class="section2-h2">        
              At Coffeeland, we aim to uplift everyone along the journey as we further our knowledge, science, research and expertise in our coffee. Our dedication for perfection values consistency, transparency and sustainability in every step of the process, and as we get smarter, so does our coffee. 
            </h2>
          </div>
          <div class="sperator2-container">
            <img class="sperator2" src="http://www.coffeeland.com/wp-content/uploads/2018/12/line.png"/>
          </div>
          <div class="section3-container type1">
            <div class="section3-pt1-container type1-container">
                  <img class="section3-pt1 section" src="http://www.coffeeland.com/wp-content/uploads/2018/12/mission_icon-1.svg"/>

                  <h3 class="section3-pt1 section">
                    OUR STORY
                  </h3>
                  <h2 class="section3-pt1 section">
                    Cultivating the perfect coffee starts at the roots
                  </h2>

                  <p class="section3-pt1 section">
                    The journey to Coffeeland begins with passion. Our passion fuels us on an adventure to explore all things coffee, to build relationships, establish new research, and share education about this bean that we love. We’re honored to share the discoveries we’ve made on our quest for the perfect cup and to demonstrate how the art and science of coffee become one.
                  </p>
                  <p class="section3-pt1 section">
                  The journey to Coffeeland begins with passion. Our passion fuels us on an adventure to explore all things coffee, to build relationships, establish new research, and share education about this bean that we love. We’re honored to share the discoveries we’ve made on our quest for the perfect cup and to demonstrate how the art and science of coffee become one.
                  </p>
                  <p class="section3-pt1 section">
                  We’ve made it our responsibility to create a transparent connection between our farmers, our researchers and consumers, so we can fully appreciate the journey our coffee has traveled to reach us. It is our goal to use this unique blend of art and science to enhance the relationship between consumer and farmer, as well as to build practices that support both coffee growers and coffee drinkers. Each sip of our coffee can be enjoyed sustainably, consistently and deliciously.
                  </p>
                  <p class="section3-pt1 section">
                  All of our journeys through the land of coffee have led us here.
                  </p>
                  <p class="section3-pt1 section">
                    <strong>This is Coffeeland.</strong>
                  </p>
                  <p  onMouseOver={this.onMouseOverButton}>
                    <a class="button2" href="#_home_educationclassrooms"> 
                      LEARN MORE
                    </a>
                  </p>
            </div>
            <div class="section3-pt2-container">          
              <img  class="section3-pt2 section-type1" src="http://www.coffeeland.com/wp-content/uploads/2018/12/mission_image_new.png" />
            </div>
          </div>
          <div class="sperator2-container" id="_home_educationclassrooms">
            <img class="sperator2 large" 
            src="http://www.coffeeland.com/wp-content/uploads/2018/12/line_large.png"/>
          </div>
          <div class="section4-container type2">
            <div class="section4-pt1-container">          
              <img  class="section4-pt1 section" src="http://www.coffeeland.com/wp-content/uploads/2019/01/coffee_edu_left_image_new.png" />
            </div>
            <div class="section4-pt2-container type2-container">
                  <img class="section3-pt1" src="http://www.coffeeland.com/wp-content/uploads/2019/01/education_girl_image_cion.svg"/>

                  <h3 class="section4-pt1 section">
                    EDUCATION
                  </h3>
                  <h2 class="section4-pt1 section">
                    COFFEE EDUCATION CLASSROOMS
                  </h2>

                  <p class="section4-pt1 section">
                    We believe coffee can be a powerful force for good in the world, particularly because of its broad global reach. Advancing coffee education and sharing that knowledge is vital for coffee across the globe, which is why our Coffee Education Classrooms are a virtue to Coffeeland’s mission.
                  </p>
                  <p class="section4-pt1 section">
                    These facilities include: Barista Coffee Lab, Sensory & Brewing Lab, Post-Processing Lab, Coffee Roasting Lab
                  </p>
                  <p  onMouseOver={this.onMouseOverButton}>
                    <a class="button2" href="#_home_sciencetechnology"> 
                      LEARN MORE
                    </a>
                  </p>
            </div>
          </div>

          <div class="sperator2-container">
            <img class="sperator2 large" 
            src="http://www.coffeeland.com/wp-content/uploads/2018/12/line_large.png"/>
          </div>
          <div class="section5-container type1" id="_home_sciencetechnology">
            <div class="section5-pt1-container type1-container">
                  <img class="section5-pt1 section" 
                  src="http://www.coffeeland.com/wp-content/uploads/2018/12/science_icon_new.svg"/>

                  <h3 class="section5-pt1 section">
                    SCIENCE AND TECHNOLOGY
                  </h3>
                  <h2 class="section5-pt1 section">
                    THE ART AND SCIENCE OF COFFEE
                  </h2>

                  <p class="section5-pt1 section">
                  Through tenacious scientific research and chemical analysis, we’ve explored every last detail of coffee at each phase of growth, from seed to harvest and from fermentation to processing. Our analytical databases show trends from key coffee indicators and allow us to monitor the quality, flavor and safety of green and roasted beans. As our research grows, we use our data to map the almost infinite variables in coffee production - giving us complete control over calibrating each step of green coffee sourcing, coffee roasting and extraction. Our coffee is verified with Q-Graders and quantified by science and research.
                  </p>
                  <p  onMouseOver={this.onMouseOverButton}>
                    <a class="button2" href="#_home_exploration"> 
                      LEARN MORE
                    </a>
                  </p>
            </div>
            <div class="section5-pt2-container">          
              <img  class="section5-pt2 section-type1" 
                src="http://www.coffeeland.com/wp-content/uploads/2019/01/sceince_right_image_new.png" />
            </div>
          </div>
          <div class="sperator2-container">
            <img class="sperator2 large" 
            src="http://www.coffeeland.com/wp-content/uploads/2018/12/line_large.png"/>
          </div>
          <div class="section6-container type2" id="_home_exploration">
            <div class="section6-pt1-container">          
              <img  class="section6-pt1 section" 
              src="http://www.coffeeland.com/wp-content/uploads/2019/01/explo_image_new_update.png" />
            </div>
            <div class="section6-pt2-container type2-container">
                  <img class="section5-pt1" 
                  src="http://www.coffeeland.com/wp-content/uploads/2018/12/exploration_icon_new.svg"/>

                  <h3 class="section6-pt1 section">
                    EXPLORATION
                  </h3>
                  <h2 class="section6-pt1 section">
                    WHERE PERFECTION IS NATURAL
                  </h2>

                  <p class="section6-pt1 section">
                    A coffee farmer’s work can be filled with challenges, such as erratic weather patterns, changes in the local ecosystems, or even labor shortages. With profound respect to the labor, our farmers devote to growing coffee as we’ve worked to understand these challenges and develop solutions to help their farms thrive.  
                  </p>
                  <p class="section6-pt1 section">
                    The research in our Coffee Crop Program is designed to aid farmers in cultivation, as well as increase their efficiency and output through new farming techniques. By working to decrease some of the difficulties coffee cultivators face, we hope to help improve coffee farming at every phase of growth.  
                  </p>
                  <p  onMouseOver={this.onMouseOverButton}>
                    <a class="button2" href="#"> 
                      LEARN MORE
                    </a>
                  </p>
            </div>
          </div>

          <div class="sperator2-container">
            <img class="sperator2" src="http://www.coffeeland.com/wp-content/uploads/2018/12/line.png"/>
          </div>          

          <div class="container">
            <img src="http://www.coffeeland.com/wp-content/uploads/2018/12/four-boxes-bg.png" class="image"/>
            <div class="wordContainer">
              <h2 class="processword">ROASTING PROCESS</h2>
              <p class="processword2">ALL THE STEPS WE’VE TAKEN FROM THE LAND OF COFFEE HAVE LED US HERE.</p>
            </div>

            <div class="card">

                  <img src="http://www.coffeeland.com/wp-content/uploads/2018/12/coffee_growth_program_image.png" class="card-image"/> 
                  <img src="http://www.coffeeland.com/wp-content/uploads/2018/12/green_bean_image.png" class="card-image"/>
                

                <img src="http://www.coffeeland.com/wp-content/uploads/2018/12/roasting_image.png" class="card-image"/> 

                <img src="http://www.coffeeland.com/wp-content/uploads/2019/01/perfect_coffie_exp_image_new_update.png" class="card-image"/>             
            </div>
          </div>
          </div>
        </div>
    )
  }
}


export default Body;
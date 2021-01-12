import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const Portfolio = props => {
  return (
      <div id="Homepage" class="fullscreen portfolioWidth">
        <div class="portfolioContainer">

          {/* Heading */}
          <Grid item xs={12}>
            <h5 class="portfolioTitle" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out">
              Work.
            </h5>
            <br />
          </Grid>

          {/************* Works (See Works.js for formatting) *****************/}
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-touch="true" data-aos="fade-zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active indicators"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1" class="indicators"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="imgLandscape"><img draggable="false" src="DogGo.png" class="carousel-img" alt="DogGo" /></div>
                <div class="imgVertical"><img draggable="false" src="DoggoVertical.png" class="carousel-img d-block w-100" alt="DogGo" /></div>
                <Link to="/DogGO">
                  <div class="carouselHover">
                    <div class="text">
                      <div class="textSubheading">A MERN Stack Ecommerce App</div>
                      <div class="textHeading">Learn More</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="carousel-item">
                <div class="imgLandscape"><img draggable="false" src="lets-chat.png" class="carousel-img" alt="let's chat" /></div>
                <div class="imgVertical"><img draggable="false" src="lets-chat-vertical.png" class="carousel-img d-block w-100" alt="DogGo" /></div>
                <Link to="/Lets-Chat">
                <div class="carouselHover">
                  <div class="text">
                    <div class="textSubheading">A ReactJS / Node / Socket.IO Chat App</div>
                    <div class="textHeading">Learn More</div>
                  </div>
                </div>
                </Link>
              </div>
            </div>
            <br />
            <br />             
          </div>
        </div>
      </div>
    );
  }

export default Portfolio;

import React from "react";
import { Link } from "react-router-dom";


const Home = props => {
  return (
    <div id="Homepage">
      <div class="fullscreen background">
      <div className="leftsideHome">
        {/* Heading */}
        <div data-aos="fade-right" data-aos-duration="2500" data-aos-easing="ease-in-out">
          <div class="title">
            Hi, I'm Echo.‍
          </div>
        </div>

        {/* Subheading */}
        <div data-aos="fade-right" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-delay="300">
          <div class="subtitle">
            A <span class="subtitle subtitle-bold">ReactJS Developer</span> based in the San Francisco Bay Area.
          </div>
        </div> 

        {/* Link to Portfolio */}
        <div data-aos="fade-right" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-delay="600">
          <Link to="/portfolio" class="btn bigButton purple buttonLink" role="button">See My Work</Link>
        </div> 
      </div>
      
        {/* Cover Image */}
        <img draggable="false" className="coverImg" src="coverImg.png" alt="girl coding with MERN stack" data-aos="fade-zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-delay="600"></img>
      </div>
    </div>
  );
};

export default Home;


import React from "react";


const Home = props => {
  return (
    <div id="Homepage">
      <div class="fullscreen background">
      <div className="leftsideHome">
        {/* Heading */}
        <div data-aos="fade-right" data-aos-duration="2500" data-aos-easing="ease-in-out">
          <h1 class="title">
            Hi, I'm Echo.‍
          </h1>
        </div>

        {/* Subheading */}
        <div data-aos="fade-right" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-delay="300">
          <p class="subtitle">
            A <span class="subtitle subtitle-bold">ReactJS Developer</span> based in the San Francisco Bay Area.
          </p>
        </div> 

        {/* Link to Portfolio */}
        <div data-aos="fade-right" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-delay="600">
          <a href="/portfolio" class="btn bigButton purple buttonLink" role="button">See My Work</a>
        </div> 
      </div>
        {/* Cover Image */}
        <img draggable="false" className="coverImg" src="coverImg.png" alt="girl coding with MERN stack" data-aos="fade-zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-delay="600"></img>
      </div>
    </div>
  );
};

export default Home;


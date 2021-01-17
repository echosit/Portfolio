import React from 'react';
import Grid from '@material-ui/core/Grid';
import Experience from "../Experience/Experience";


const About = props => {
  return (
    <div class="fullscreen background">
      <Grid container spacing={3}>

        {/******** About Me Section *********/}
        <Grid item sm={12} data-aos="fade-in" data-aos-duration="1500" data-aos-easing="ease-in-out">

          {/* About Picture */}
          <img draggable="false" class="aboutImage" src="profileIcon.png" alt="Echo"/>

          <div>
            {/* About Heading */}
            <div class="aboutHeading">
              About Me. 
            </div>
            <br />

            {/* About Text */}
            <div class="aboutText">
              Hi there! I am Echo, a ReactJS Developer based in the San Francisco Bay Area. In June 2020, I graduated from California Polytechnic State University, San Luis Obispo with a Bachelor’s degree in Sociology. After self-learning HTML and CSS, I shortly developed an interest for coding and enrolled in a MERN Stack Bootcamp.
            </div>
            <div class="aboutText paddingTop">
              Since graduating, I have committed myself to learning frontend and backend development and have built full-stack web applications using ReactJS, NodeJS, and MongoDB. I am a highly passionate learner and creative problem solver who loves ReactJS!
            </div>

            {/* Resume Button */}
            <div class="text-center">
              <br />
              <a href="Sit_Echo_Resume.pdf" download class="btn resumeButton bigButton blueButton buttonLink" role="button">Download Resume</a>
            </div>
          </div>

        </Grid>


       {/** Decorative Divider **/}
        <div
          data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out"
          class="hrContainer">
          <hr />
        </div>


        {/******** Skills Section *********/}
        <div
          className="skillWidth" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out"
        >
          <div class="aboutHeading">
            My Skills
          </div>
          <div className="skillContainer">
            <div className="skillCard">
            {/* Technical Skills */}
              <div className="skillTitle skillPadding">
                Technical Skills: 
              </div>
              <div className="skillText">
                <div className="skillPadding">Front-end Development</div>
                <div className="skillPadding">Back-end Development</div>
                <div className="skillPadding">Basic UI/UX & Design</div>
                <div className="skillPadding">Responsive Single Page and Full-Stack Applications</div>
                <div className="skillPadding">RESTful & APIs</div>
              </div>
            </div>
            <div className="skillCard">
            {/* Technologies */}
              <div className="skillTitle skillPadding">
                Tools: 
              </div>
              <div className="skillBold">Frontend</div>
              <div className="skillSpace">ReactJS, Redux</div>
              <div>JSX, JSON</div>
              <div>Mongoose</div>
              <div className="skillPadding">Bootstrap, Material UI, React UI Components, FlexBox</div>
              <div className="skillBold">Backend</div>
              <div className="skillSpace">NodeJS, ExpressJS</div>
              <div className="skillPadding">NPM</div>
              <div className="skillBold">Database</div>
              <div className="skillSpace skillPadding">MongoDB</div>
              <div className="skillBold">Version Control</div>
              <div className="skillSpace">Git, Github</div>
            </div>
            <div className="skillCard">
            {/* Soft Skills */}
              <div className="skillTitle skillPadding">
                Soft Skills: 
              </div>
              <div className="skillText">
                <div className="skillPadding">Team player</div>
                <div className="skillPadding">Excellent time-management skills</div>
                <div className="skillPadding">Great interpersonal skills</div>
                <div className="skillPadding">Open-minded</div>
                <div className="skillPadding">Problem solver</div>
              </div>
            </div>
          </div>
        </div> 


        {/** Decorative Divider **/}
        <div class="hrContainer"
          data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out"
        >
          <hr />
        </div>


        {/******** Timeline Section *********/}
        <Grid item sm={12} data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">
          <div class="aboutHeading">
            My Timeline. 
          </div>
          <br /> 
          <Experience />
        </Grid>

      </Grid>
    </div>
  );
};

export default About;

import React from "react";
import { Timeline } from '@material-ui/lab';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';
import GavelIcon from '@material-ui/icons/Gavel';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';


const Experience = props => {
  return (
    <div>

     {/******** Main Timeline *********/}
     <Timeline align="alternate" class="bigTimeline">

      {/* Bootcamp Info */}
      <TimelineItem>
         <TimelineOppositeContent>
         <h5 class="timelineDate">
           2020 - Current
         </h5>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot class="blueTimeline">
             <CodeIcon />
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
          <h5 class="timelineHeading">
            Self-Taught ReactJS Developer
          </h5>
          <h5 class="timelineSubheading">
            6+ months
          </h5>
          <p class="timelineText">
            Hands-on experience designing and developing single page and full-stack web applications while using solid ReactJS concepts to create highly responsive user interface components
          </p>
         </TimelineContent>
       </TimelineItem>

       {/* Bootcamp Info */}
       <TimelineItem>
         <TimelineOppositeContent>
         <h5 class="timelineDate">
           2020
         </h5>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot class="blueTimeline">
             <SchoolIcon />
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
          <h5 class="timelineHeading">
            Bootcamp Student
          </h5>
          <h5 class="timelineSubheading">
            3 months
          </h5>
          <p class="timelineText">
            The Complete 2020 Web Development Bootcamp - Udemy Course
          </p>
         </TimelineContent>
       </TimelineItem>

       {/* Education Info */}
       <TimelineItem>
        <TimelineOppositeContent>
          <h5 class="timelineDate">
           2016 - 2020
          </h5>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot class="purpleTimeline">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h5 class="timelineHeading">
            Bachelor of Arts in Sociology
          </h5>
          <h5 class="timelineSubheading">
            Cum Laude
          </h5>
          <p class="timelineText">California Polytechnic State University, San Luis Obispo</p>
        </TimelineContent>
       </TimelineItem>

       {/* Probations Info */}
       <TimelineItem>
         <TimelineOppositeContent>
          <h5 class="timelineDate">
           2020
          </h5>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot class="grayTimeline">
             <AccountBalanceIcon />
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
          <h5 class="timelineHeading">
            Adult Specialty Courts Unit Intern
          </h5>
          <h5 class="timelineSubheading">
            3 months
          </h5>
          <p class="timelineText">
            Probation Department, San Luis Obispo County
          </p>
         </TimelineContent>
        </TimelineItem>

        {/* District Attorney Info */}
        <TimelineItem>
         <TimelineOppositeContent>
          <h5 class="timelineDate">
           2019 - 2020
          </h5>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot class="grayTimeline">
             <GavelIcon />
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
          <h5 class="timelineHeading">
            District Attorney Intern
          </h5>
          <h5 class="timelineSubheading">
            6 months
          </h5>
          <p class="timelineText">
            Office of District Attorney, San Luis Obispo County
          </p>
         </TimelineContent>
       </TimelineItem>
     </Timeline>


    {/******** Responsive Timeline *********/}
    <div class="smallTimeline">
      {/* Current Info */}
      <div class="iconDate noPaddingTop">
        <TimelineDot class="blueTimeline icon">
          <CodeIcon /> 
        </TimelineDot>
        <p class="timelineDate">2020 - Current</p>
      </div>
      <h5 class="timelineHeading">
        Self-Taught ReactJS Developer
      </h5>
      <h5 class="timelineSubheading">
        6+ Months
      </h5>
      <p class="timelineText">
        Hands-on experience designing and developing single page and full-stack web applications while using solid ReactJS concepts to create highly responsive user interface components
      </p>

      {/* Bootcamp Info */}
      <div class="iconDate">
        <TimelineDot class="blueTimeline icon">
          <SchoolIcon />
        </TimelineDot>
        <p class="timelineDate">2020</p>
      </div>
      <h5 class="timelineHeading">
        Bootcamp Student
      </h5>
      <h5 class="timelineSubheading">
        3 months
      </h5>
      <p class="timelineText">
        The Complete 2020 Web Development Bootcamp - Udemy Course
      </p>

      {/* Education Info */}
      <div class="iconDate">
        <TimelineDot class="purpleTimeline icon">
          <SchoolIcon />
        </TimelineDot>
        <p class="timelineDate">2016 - 2020</p>
      </div>
      <h5 class="timelineHeading">
        Bachelor of Arts in Sociology
      </h5>
      <h5 class="timelineSubheading">
        Cum Laude
      </h5>
      <p class="timelineText">
        California Polytechnic State University, San Luis Obispo
      </p>

      {/* Probations Info */}
      <div class="iconDate">
        <TimelineDot class="grayTimeline icon">
          <AccountBalanceIcon />
        </TimelineDot>
        <p class="timelineDate">2020</p>
      </div>
      <h5 class="timelineHeading">
        Adult Specialty Courts Unit Intern
      </h5>
      <h5 class="timelineSubheading">
        3 months
      </h5>
      <p class="timelineText">
        Probation Department, San Luis Obispo County
      </p>

      {/* District Attorney Info */}
      <div class="iconDate">
        <TimelineDot class="grayTimeline icon">
          <GavelIcon />
        </TimelineDot>
        <p class="timelineDate">2019 - 2020</p>
      </div>
      <h5 class="timelineHeading">
        District Attorney Intern
      </h5>
      <h5 class="timelineSubheading">
        6 months
      </h5>
      <p class="timelineText">
        Office of District Attorney, San Luis Obispo County
      </p>
    </div>
    </div>
  );
};

export default Experience;

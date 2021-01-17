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
         <div class="timelineDate">
           2020 - Current
         </div>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot class="blueTimeline">
             <CodeIcon />
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
          <div class="timelineHeading">
            Self-Taught ReactJS Developer
          </div>
          <div class="timelineSubheading">
            6+ months
          </div>
          <div class="timelineText">
            Hands-on experience designing and developing single page and full-stack web applications while using solid ReactJS concepts to create highly responsive user interface components
          </div>
         </TimelineContent>
       </TimelineItem>

       {/* Bootcamp Info */}
       <TimelineItem>
         <TimelineOppositeContent>
         <div class="timelineDate">
           2020
         </div>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot class="blueTimeline">
             <SchoolIcon />
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
          <div class="timelineHeading">
            Bootcamp Student
          </div>
          <div class="timelineSubheading">
            3 months
          </div>
          <div class="timelineText">
            The Complete 2020 Web Development Bootcamp - Udemy Course
          </div>
         </TimelineContent>
       </TimelineItem>

       {/* Education Info */}
       <TimelineItem>
        <TimelineOppositeContent>
          <div class="timelineDate">
           2016 - 2020
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot class="purpleTimeline">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div class="timelineHeading">
            Bachelor of Arts in Sociology
          </div>
          <div class="timelineSubheading">
            Cum Laude
          </div>
          <div class="timelineText">California Polytechnic State University, San Luis Obispo</div>
        </TimelineContent>
       </TimelineItem>

       {/* Probations Info */}
       <TimelineItem>
         <TimelineOppositeContent>
          <div class="timelineDate">
           2020
          </div>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot class="grayTimeline">
             <AccountBalanceIcon />
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
          <div class="timelineHeading">
            Adult Specialty Courts Unit Intern
          </div>
          <div class="timelineSubheading">
            3 months
          </div>
          <div class="timelineText">
            Probation Department, San Luis Obispo County
          </div>
         </TimelineContent>
        </TimelineItem>

        {/* District Attorney Info */}
        <TimelineItem>
         <TimelineOppositeContent>
          <div class="timelineDate">
           2019 - 2020
          </div>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot class="grayTimeline">
             <GavelIcon />
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
          <div class="timelineHeading">
            District Attorney Intern
          </div>
          <div class="timelineSubheading">
            6 months
          </div>
          <div class="timelineText">
            Office of District Attorney, San Luis Obispo County
          </div>
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
        <div class="timelineDate">2020 - Current</div>
      </div>
      <div class="timelineHeading">
        Self-Taught ReactJS Developer
      </div>
      <div class="timelineSubheading">
        6+ Months
      </div>
      <div class="timelineText">
        Hands-on experience designing and developing single page and full-stack web applications while using solid ReactJS concepts to create highly responsive user interface components
      </div>

      {/* Bootcamp Info */}
      <div class="iconDate">
        <TimelineDot class="blueTimeline icon">
          <SchoolIcon />
        </TimelineDot>
        <div class="timelineDate">2020</div>
      </div>
      <div class="timelineHeading">
        Bootcamp Student
      </div>
      <div class="timelineSubheading">
        3 months
      </div>
      <div class="timelineText">
        The Complete 2020 Web Development Bootcamp - Udemy Course
      </div>

      {/* Education Info */}
      <div class="iconDate">
        <TimelineDot class="purpleTimeline icon">
          <SchoolIcon />
        </TimelineDot>
        <div class="timelineDate">2016 - 2020</div>
      </div>
      <div class="timelineHeading">
        Bachelor of Arts in Sociology
      </div>
      <div class="timelineSubheading">
        Cum Laude
      </div>
      <div class="timelineText">
        California Polytechnic State University, San Luis Obispo
      </div>

      {/* Probations Info */}
      <div class="iconDate">
        <TimelineDot class="grayTimeline icon">
          <AccountBalanceIcon />
        </TimelineDot>
        <div class="timelineDate">2020</div>
      </div>
      <div class="timelineHeading">
        Adult Specialty Courts Unit Intern
      </div>
      <div class="timelineSubheading">
        3 months
      </div>
      <div class="timelineText">
        Probation Department, San Luis Obispo County
      </div>

      {/* District Attorney Info */}
      <div class="iconDate">
        <TimelineDot class="grayTimeline icon">
          <GavelIcon />
        </TimelineDot>
        <div class="timelineDate">2019 - 2020</div>
      </div>
      <div class="timelineHeading">
        District Attorney Intern
      </div>
      <div class="timelineSubheading">
        6 months
      </div>
      <div class="timelineText">
        Office of District Attorney, San Luis Obispo County
      </div>
    </div>
    </div>
  );
};

export default Experience;

import React from 'react';
import { Link } from 'react-router-dom';

const WorkDetails = ({
    title,
    gif,
    gifName,
    site, 
    hide,
    github, 
    description,
    technologies,
    li1,
    li2,
    li3,
    li4

}) => (
        <div className="background">
            <Link className="workLink" to="/Portfolio">Back to Work</Link>
            <h5 class="portfolioTitle center paddingTop" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out">
              About {title}.
            </h5>
            <div className="workContainer" data-aos="fade-zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <div className="workHalf paddingTop paddingRight">
                    <img className="gif" draggable="false" src={gif} alt={gifName}></img>
                </div>
                <div className="workHalf paddingTop">
                    <button className="btn workButton portfolioButton blueButton">
                        <a href={site} target="_blank">Go To Site</a>
                    </button>
                    <button className="btn workButton portfolioButton grayButton moveRight">
                        <a href={github} target="_blank">Source Code</a>
                    </button>
                    <div className="workText morePaddingTop">
                        {description}
                    </div>
                    <div className="workHeading morePaddingTop">
                        Technologies: 
                    </div>
                    <div className="workText paddingTop">
                        {technologies} 
                    </div>
                    <div className="workHeading morePaddingTop">
                        Features: 
                    </div>
                    <div className="workText alignLeft paddingTop">
                        <ul>
                            <li>{li1}</li>
                            <li>{li2}</li>
                            <li id={hide}>{li3}</li>
                            <li id={hide}>{li4}</li>
                         </ul>
                    </div>
                </div>
            </div>
        </div>
    );

export default WorkDetails;
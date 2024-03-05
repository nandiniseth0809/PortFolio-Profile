import React, { useState } from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
  const [showEricssonDetails, setShowEricssonDetails] = useState(false);
  const [showSimpplrDetails, setShowSimpplrDetails] = useState(false);

  const toggleEricssonDetails = () => {
    setShowEricssonDetails(!showEricssonDetails);
  };
  const toggleSimpplrDetails = () =>{
	setShowSimpplrDetails(!showSimpplrDetails);
  }

  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Work"
        body={
          <div className="works-body">
            <div className="work" >  
			<div className="heading" onClick={toggleEricssonDetails} >
			<img
                src="./ericsson.jpg"
                alt="Ericsson"
                className="work-image"
              />
				<div className="work-title">Ericsson</div>
				<ArrowDropDownIcon className="dropdown" ></ArrowDropDownIcon>
				</div>
					<div className="details">
                <div className="work-subtitle">Research and Development Intern</div>
                <div className="work-duration">Jan 2023 - Jul 2023</div>
				</div>
				
			

                {showEricssonDetails && (
                  <div className="ericsson-details">
                    <ul>
                      <li>Worked with the automation team which enhances efficiency by creating CI/CD pipeline. </li>
                      <li>Created Jenkins pipeline for the flow of package delivery from directory to client.</li>
                      <li>Implemented automated security triggers to secure the packages once uploaded.</li>
					  <li>Collaborated with cross-functional teams to ensure the quality of software releases.</li>
					  <li>Automation done for both virtual as well as container packages.</li>
					  <li>Generated a pipeline script for fetching data using API, filtered it, and automatically delivered it via email to the user
biweekly.</li>
<li>Contributed to the development of Python scripts for data visualization, enhancing the team’s ability to interpret
complex data</li>
                    </ul>
                  </div>
                )}  
            </div>

            <div className="work" >  
			<div className="heading" onClick={toggleSimpplrDetails} >
			<img
                src="./download.png"
                alt="Simpplr"
                className="work-image"
              />
				<div className="work-title">Simpplr Software</div>
				<ArrowDropDownIcon className="dropdown" ></ArrowDropDownIcon>
				</div>
					<div className="details">
                <div className="work-subtitle">Research and Development Intern</div>
                <div className="work-duration">Sept 2023 - Feb 2024</div>
				</div>
				
			

                {showSimpplrDetails && (
                  <div className="ericsson-details">
                    <ul>
                      <li>Developed new features in SwiftUIKit like Audio Recording , Profile Edit functionality in mobile for updating their
personal details</li>
                      <li> Implemented accessibility enhancements and resolved bugs.</li>
                      <li>Customized app appearance for clients, including color schemes, app names, splash screens, and icons.</li>
					  <li> Customized app appearance for clients, including color schemes, app names, splash screens, and icons.</li>
					  <li> Utilized agile methodologies for project management and managed tasks through Jira platform.</li>
                    </ul>
                  </div>
                )}
			         
            </div>


		  </div>
        }
      />
    </div>
  );
};

export default Works;

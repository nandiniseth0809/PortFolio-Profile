import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	const helper = (event) => {
		event.preventDefault(); // Prevents the default action of the link
		window.open('https://drive.google.com/file/d/1ElBL9vHW442rbWhi9y5gSKipWeeNrLSG/view?usp=sharing');
	}

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "Resume"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href = "https://drive.google.com/file/d/1ElBL9vHW442rbWhi9y5gSKipWeeNrLSG/view?usp=sharing" target="_blank">Resume</a>
							
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;

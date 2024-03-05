import React from "react";
import exampleImage from "./c++.png";
const INFO = {
	main: {
		title: "Reactfolio by Nandini",
		name: "Nandini Seth ",
		email: "nandiniseth0809@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/nandiniseth0809",
		linkedin: "https://www.linkedin.com/in/nandiniseth/",
		instagram: "https://instagram.com/",
	},

	homepage: {
		title: "Full-stack Web Developer  ",
		description:
			"I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "HI I’m Nandini Seth!",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. I have an internship experience of 1 year . My first internship was in Ericsson Global . There I worked on CI/CD pipelines , Creating  Jenkins pipelines , python automation scripts . I have also worked in Simpplr Software as an ios Developer . I have keen interest in Data Structures and Algorithms .  ",
	},

	articles: {
		title: "CSS Articles ",
		description:
			"Everything u need to know about CSS.",
	},

	projects: [
		{
			title: "Campgrounds",
			description:
				"Used Express framework to render pages. App interface was prepared in EJS. Implemented CRUD functionality allowing registered users to add new campgrounds, and update/delete them. Implemented authentication and authorization using Passport.js.",
				logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/nandiniseth0809/Yelp-Node.js",
		},

		{
			title: "Cardio Vascular Disease Prediction ",
			description:
				"Predicted cardiovascular disease on Kaggle using Python. Achieved an accuracy of 72.79% using Stacked method (Gradient Boosting, Light Gradient Boosting, RidgeClassification).",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png", 
			linkText: "View Project",
			link: "https://github.com/nandiniseth0809/cardio-vascular-prediction",
		},
		{
			title: "Spell Checker",
			description:
				" Implemented a robust spell checker application utilizing a Ternary Search Tree (TST) data structure to efficiently store and manage an extensive dictionary of words",
			logo: exampleImage ,
			linkText: "View Project",
			link: "https://github.com/samual002/Spell-Checker",
		},

	],
};

export default INFO;

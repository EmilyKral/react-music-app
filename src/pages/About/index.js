import React, { useState, useEffect } from "react";
import { Bio, PhotoCarousel } from "../../components";
import "./style.css";

function About() {
	return (
		<main>
			<h2>About</h2>
			<PhotoCarousel />
			<Bio />
		</main>
	);
}

export default About;

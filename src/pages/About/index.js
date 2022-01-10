import React, { useState, useEffect } from "react";
import { Bio, PhotoCarousel } from "../../components";
import "./style.css";

function About() {
	return (
		<main>
			<PhotoCarousel />
			<Bio />
		</main>
	);
}

export default About;

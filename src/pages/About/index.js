import React, { useState, useEffect } from "react";
import { Bio, PhotoCarousel } from "../../components";
import "./style.css";

function About() {
	return (
		<>
			<PhotoCarousel />
			<Bio />
		</>
	);
}

export default About;

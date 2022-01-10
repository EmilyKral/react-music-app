import React, { useState } from "react";
import "./style.css";

function Bio() {
	// const [bio, setBio] = useState({
	// 	genre: "Pop",
	// 	bio: "Tessa Violet is an American singer-songwriter, video-blogger, actress, music video director and former model. She has released two studio albums"
	// });
	return (
		<section id="bio">
			{/* <h2>About Tessa</h2>
			<p>Genre:</p>
			<p>Indie pop</p>
			<p>About:</p> */}
			<p>
				Tessa Violet is an American singer-songwriter, video-blogger, actress, music video director
				and former model. She has released two studio albums.
			</p>
			<p>
				Click{" "}
				<a href="https://tessa-violet.com/" target="_blank" id="website-link">
					here
				</a>{" "}
				to visit her official website
			</p>
		</section>
	);
}

export default Bio;

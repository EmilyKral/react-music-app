import React, { useState } from "react";

function Bio() {
	const [bio, setBio] = useState({
		genre: "Pop",
		bio: "Tessa Violet is an American singer-songwriter, video-blogger, actress, music video director and former model. She has released two studio albums"
	});
	return (
		<>
			<h2>About Tessa</h2>
			<p>Genre:</p>
			<p>{bio.genre}</p>
			<p>About:</p>
			<p>{bio.bio}</p>
		</>
	);
}

export default Bio;

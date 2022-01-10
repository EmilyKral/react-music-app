import React from "react";
import { LikeButton } from "..";

function Tracklist({ tracklist, albumId }) {
	const tracklistItems = tracklist.map(track => (
		<li key={albumId + "-" + track.id}>
			<p>{track.title}</p>
			<LikeButton />
		</li>
	));
	return (
		<div className="tracks-div">
			<p>Tracks:</p>
			<ul>{tracklistItems}</ul>
		</div>
	);
}

export default Tracklist;

import React from "react";
import { LikeButton } from "..";
import "./style.css";

function Tracklist({ tracklist, albumId }) {
	const tracklistItems = tracklist.map(track => (
		<li key={albumId + "-" + track.id} className="track">
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

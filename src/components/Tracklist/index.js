import React from "react";

function Tracklist({ tracklist, albumId }) {
	const tracklistItems = tracklist.map(track => (
		<li key={albumId + "-" + track.id}>{track.title}</li>
	));
	return (
		<div className="tracks-div">
			<p>Tracks:</p>
			<ul>{tracklistItems}</ul>
		</div>
	);
}

export default Tracklist;

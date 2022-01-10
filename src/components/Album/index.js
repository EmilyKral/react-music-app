import React from "react";

function Album({ albumData }) {
	console.log("albumData", albumData);
	console.log("tracklist", albumData.tracklist);
	const trackList = albumData.tracklist.map(track => (
		<li key={albumData.id + "-" + track.id}>{track.title}</li>
	));
	return (
		<>
			<h3>
				{albumData.title} <span>({albumData.releaseDate})</span>
			</h3>
			<p>Fun fact: {albumData.funFact}</p>
			<p>Tracks:</p>
			<ul>{trackList}</ul>
		</>
	);
}

export default Album;

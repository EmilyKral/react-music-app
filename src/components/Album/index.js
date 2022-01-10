import React, { useState } from "react";
import "./style.css";

function Album({ albumData }) {
	const [tracklistVisible, setTracklistVisible] = useState(false);
	const showHide = tracklistVisible ? "Hide" : "Show";
	const trackList = albumData.tracklist.map(track => (
		<li key={albumData.id + "-" + track.id}>{track.title}</li>
	));

	const toggleTracks = () => {
		setTracklistVisible(!tracklistVisible);
	};
	return (
		<section>
			<div className="album-info">
				<h3>
					{albumData.title} <span>({albumData.releaseDate})</span>
				</h3>
				<img
					src={albumData.coverLink}
					alt={albumData.title + " album cover"}
					className="album-cover"
				/>
				<p>Fun fact: {albumData.funFact}</p>
				<button onClick={toggleTracks}>{showHide} tracks</button>
			</div>
			{tracklistVisible && (
				<div className="tracks-div">
					<p>Tracks:</p>
					<ul>{trackList}</ul>
				</div>
			)}
		</section>
	);
}

export default Album;

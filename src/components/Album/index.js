import React, { useState } from "react";
import { Tracklist } from "..";
import "./style.css";

function Album({ albumData }) {
	const [tracklistVisible, setTracklistVisible] = useState(false);
	const showHide = tracklistVisible ? "Hide" : "Show";

	const toggleTracks = () => {
		setTracklistVisible(!tracklistVisible);
	};
	return (
		<div className="album">
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
			{tracklistVisible && <Tracklist tracklist={albumData.tracklist} albumId={albumData.id} />}
		</div>
	);
}

export default Album;

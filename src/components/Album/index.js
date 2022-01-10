import React, { useState } from "react";
import { Tracklist } from "..";
import "./style.css";

function Album({ albumData }) {
	const [tracklistVisible, setTracklistVisible] = useState(false);
	const [factVisible, setFactVisible] = useState(false);
	const showHideTrack = tracklistVisible ? "Hide" : "Show";
	const showHideFact = factVisible ? "Hide" : "Show";

	return (
		<section className="album">
			<div className="album-info">
				<h3>
					{albumData.title} <span className="release-date">({albumData.releaseDate})</span>
				</h3>
				<img
					src={albumData.coverLink}
					alt={albumData.title + " album cover"}
					className="album-cover"
				/>
				<div className="show-buttons">
					<button onClick={() => setFactVisible(!factVisible)} className="show-button show-fact">
						{showHideFact} fun fact
					</button>
					<button
						onClick={() => setTracklistVisible(!tracklistVisible)}
						className="show-button show-tracks"
					>
						{showHideTrack} tracks
					</button>
				</div>
				{factVisible && <p>Fun fact: {albumData.funFact}</p>}
			</div>
			{tracklistVisible && <Tracklist tracklist={albumData.tracklist} albumId={albumData.id} />}
		</section>
	);
}

export default Album;

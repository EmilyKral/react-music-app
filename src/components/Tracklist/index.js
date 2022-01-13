import React, { useState } from "react";
import { Track } from "..";
import "./style.css";

function Tracklist({ tracklist, albumId }) {
	const tracklistItems = tracklist.map(track => (
		<Track key={albumId + "-" + track.id} track={track} />
	));
	return (
		<div className="tracks-div">
			<ul className="track-list">{tracklistItems}</ul>
		</div>
	);
}

export default Tracklist;

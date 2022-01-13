import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { LikeButton, LyricsButton } from "..";
import "./style.css";

function Track({ track }) {
	const [liked, setLiked] = useState(false);
	return (
		<li className="track">
			<div className="track-title">
				{liked && <FontAwesomeIcon icon={faHeart} />}
				<p>{track.title}</p>
			</div>
			<LikeButton updateLiked={setLiked} liked={liked} />
			<LyricsButton />
		</li>
	);
}

export default Track;

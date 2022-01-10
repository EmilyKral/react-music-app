import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function LikeButton() {
	const [liked, setLiked] = useState(false);
	return (
		<button
			className={liked ? "liked like-button" : "not-liked like-button"}
			onClick={() => setLiked(!liked)}
		>
			<FontAwesomeIcon icon={faThumbsUp} />
		</button>
	);
}

export default LikeButton;

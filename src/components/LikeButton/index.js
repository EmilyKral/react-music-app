import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as faThumbsUpSolid } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as faThumbsUpReg } from "@fortawesome/free-regular-svg-icons";
import "./style.css";

function LikeButton() {
	const [liked, setLiked] = useState(false);
	return (
		<button
			className={liked ? "liked like-button" : "not-liked like-button"}
			onClick={() => setLiked(!liked)}
		>
			{liked ? (
				<FontAwesomeIcon icon={faThumbsUpSolid} />
			) : (
				<FontAwesomeIcon icon={faThumbsUpReg} />
			)}
		</button>
	);
}

export default LikeButton;

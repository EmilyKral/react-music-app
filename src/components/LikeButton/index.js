import React, { useState } from "react";
import "./style.css";

function LikeButton() {
	const [liked, setLiked] = useState(false);
	return (
		<button
			className={liked ? "liked like-button" : "not-liked like-button"}
			onClick={() => setLiked(!liked)}
		>
			Like
		</button>
	);
}

export default LikeButton;

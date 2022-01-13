import React, { useState } from "react";
import "./style.css";

function LikeButton({ updateLiked, liked }) {
	return (
		<button className={"like-button"} onClick={() => updateLiked(!liked)}>
			{liked ? "dislike" : "like"}
		</button>
	);
}

export default LikeButton;

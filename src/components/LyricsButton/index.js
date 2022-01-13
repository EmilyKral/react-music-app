import React, { useState } from "react";
import "./style.css";

function LyricsButton() {
	const [showLyrics, setShowLyrics] = useState(false);
	const showHide = showLyrics ? "hide" : "show";
	return (
		<button onClick={() => setShowLyrics(!showLyrics)} className="lyrics-button">
			{showHide} lyrics
		</button>
	);
}

export default LyricsButton;

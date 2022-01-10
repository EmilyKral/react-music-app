import React, { useState } from "react";
import { Album } from "../";

function AlbumList() {
	const [albums, setAlbums] = useState([
		{
			id: 1,
			title: "Maybe Trapped Mostly Troubled",
			releaseDate: "March 2014",
			tracklist: [
				{ id: 1, title: "Just Right" },
				{ id: 2, title: "Broken Record" },
				{ id: 3, title: "Small" },
				{ id: 4, title: "Make Me A Robot" },
				{ id: 5, title: "Like You Used To" },
				{ id: 6, title: "Tennessee" },
				{ id: 7, title: "Sorry I'm Not Sorry" },
				{ id: 8, title: "This I Pray For You" },
				{ id: 9, title: "The Things I Do" },
				{ id: 10, title: "Now That We're Done" }
			],
			funFact:
				"This album was her debut album but has since been removed from all streaming platforms"
		},
		{
			id: 2,
			title: "Bad Ideas",
			releaseDate: "October 2019",
			tracklist: [
				{ id: 1, title: "Prelude" },
				{ id: 2, title: "Crush" },
				{ id: 3, title: "Bad Ideas" },
				{ id: 4, title: "I Like (the idea of) You" },
				{ id: 5, title: "Games" },
				{ id: 6, title: "Feelin'" },
				{ id: 7, title: "Words Ain't Enough" },
				{ id: 8, title: "Bored" },
				{ id: 9, title: "Wishful Drinking" },
				{ id: 10, title: "Honest" },
				{ id: 11, title: "Interlude III" }
			],
			funFact: "Bad Ideas was originally planned to be released as three separate EPs"
		}
	]);
	const albumList = albums.map(album => (
		<div>
			<Album albumData={album} />
		</div>
	));
	return (
		<>
			<h2>Albums</h2>
			{albumList}
		</>
	);
}

export default AlbumList;
import React, { useState } from "react";
import { Album } from "../";

function AlbumList() {
	const [albums, setAlbums] = useState([
		{
			id: 1,
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
			funFact: "Bad Ideas was originally planned to be released as three separate EPs.",
			coverLink: "https://m.media-amazon.com/images/I/711FaNttF5L._AC_SL1500_.jpg"
		},
		{
			id: 2,
			title: "Halloway (EP)",
			releaseDate: "September 2016",
			tracklist: [
				{ id: 1, title: "Dream" },
				{ id: 2, title: "Not Over You" },
				{ id: 3, title: "Haze" },
				{ id: 4, title: "On My Own" },
				{ id: 5, title: "I Don't Get To Say I Love You Anymore" }
			],
			funFact:
				"The title was inspired by the character Will Halloway from the novel Something Wicked This Way Comes.",
			coverLink:
				"https://is4-ssl.mzstatic.com/image/thumb/Music62/v4/b0/a9/49/b0a949d6-de5e-75f9-6397-0eb47e1540c1/190394809508.jpg/1200x1200bf-60.jpg"
		},
		{
			id: 3,
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
			funFact: "This was her debut album but has since been removed from all streaming platforms.",
			coverLink: "https://images.genius.com/638e4c9f2e85e03f55b1b1cb91d38c69.1000x1000x1.jpg"
		}
	]);
	const albumList = albums.map(album => <Album albumData={album} key={album.id} />);
	return <>{albumList}</>;
}

export default AlbumList;

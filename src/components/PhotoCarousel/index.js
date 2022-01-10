import React, { useState, useEffect } from "react";
import "./style.css";

function PhotoCarousel() {
	const [imageCounter, setImageCounter] = useState(0);

	const imageLinks = [
		"https://images.squarespace-cdn.com/content/v1/5bec99b61aef1d579c0199a2/1629159237409-V75G28NF36Z15SYM90JD/tessaviolet-25.JPG", // fbc dress buildings
		"https://gis.scdn7.secure.raxcdn.com/mediaLibrary/images/english/3411.jpg", // green leaves
		"https://i.ytimg.com/vi/ne5AQiEFvBI/maxresdefault.jpg", // twilight
		"https://i.pinimg.com/originals/2b/cf/a4/2bcfa434a7ba8ecf3db4beb32f9c5895.png", // crush music vid
		"https://www.c-heads.com/wp-content/uploads/2019/07/IMG_0050-1.jpg", // smiling up right
		"https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:672958?quality=0.8&format=jpg&width=1440&height=810&.jpg" // mirror
		// "https://celebmix.com/wp-content/uploads/2021/07/interview-tessa-violet-talks-games-ft.-lovelytheband-01.jpg" //gold outfit - link doesnt work/url v slow to load
	];
	useEffect(() => {
		const cycle = () => {
			setImageCounter((imageCounter + 1) % imageLinks.length);
		};
		const int = setInterval(cycle, 5000);
		return () => clearInterval(int);
	});
	return <img src={imageLinks[imageCounter]} className="cover-image" alt="Tessa Violet" />;
}

export default PhotoCarousel;

import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Header() {
	return (
		<header>
			<h1>TESSA VIOLET</h1>
			<nav>
				<NavLink to="/">About</NavLink>
				<NavLink to="/albums">Albums</NavLink>
			</nav>
		</header>
	);
}

export default Header;

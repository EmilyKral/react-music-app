import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header>
			<h1>Tessa Violet</h1>
			<nav>
				<NavLink to="/">About</NavLink>
				<NavLink to="/albums">Albums</NavLink>
			</nav>
		</header>
	);
}

export default Header;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Music, About } from "./pages";
import { Header } from "./layout";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<About />}></Route>
				<Route exact path="/albums" element={<Music />}></Route>
			</Routes>
		</>
	);
}

export default App;

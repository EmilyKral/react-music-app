import React from "react";
import { Routes, Route } from "react-router-dom";
import { Music, About } from "./pages";
import { Header } from "./layout";
import "./App.css";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<About />}></Route>
				<Route path="/albums" element={<Music />}></Route>
			</Routes>
		</>
	);
}

export default App;

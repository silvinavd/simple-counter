//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

let counter = 0;

setInterval(() => {
	let six = Math.floor(counter / 100000) % 10;
	let five = Math.floor(counter / 10000) % 10;
	let four = Math.floor(counter / 1000) % 10;
	let three = Math.floor(counter / 100) % 10;
	let two = Math.floor(counter / 10) % 10;
	let one = Math.floor(counter / 1) % 10;
	ReactDOM.render(
		<Home
			one={one}
			two={two}
			three={three}
			four={four}
			five={five}
			six={six}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
//render your react application

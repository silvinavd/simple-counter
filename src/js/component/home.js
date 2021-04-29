import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		//Contador

		<div className="container d-flex">
			<div className="box">
				<i className="far fa-clock fa-5x clock"></i>{" "}
			</div>
			<div className="box ">
				<h1 className="align-items-center">0</h1>
			</div>
			<div className="box">
				<h1>0</h1>
			</div>
			<div className="box">
				<h1>0</h1>
			</div>
			<div className="box">
				<h1>0</h1>
			</div>
			<div className="box">
				<h1>0</h1>
			</div>
			<div className="box">
				<h1>0</h1>
			</div>
		</div>
	);
}

import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	return (
		//Contador

		<div className="container d-flex">
			<div className="box">
				<i className="far fa-clock fa-5x clock"></i>{" "}
			</div>
			<div className="box ">
				<h1 className="align-items-center">{props.six}</h1>
			</div>
			<div className="box">
				<h1>{props.five}</h1>
			</div>
			<div className="box">
				<h1>{props.four}</h1>
			</div>
			<div className="box">
				<h1>{props.three}</h1>
			</div>
			<div className="box">
				<h1>{props.two}</h1>
			</div>
			<div className="box">
				<h1>{props.one}</h1>
			</div>
		</div>
	);
}
Home.propTypes = {
	six: PropTypes.string,
	five: PropTypes.string,
	four: PropTypes.string,
	three: PropTypes.string,
	two: PropTypes.string,
	one: PropTypes.string
};

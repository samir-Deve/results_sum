import React from "react";
import { Component } from "react";  
import './style.css';
import data from './data.json';

class ResultsSum extends Component {
	state = {  };
	getAverage = () => {
		let averageValue = 0;
		data.map((each, i) => {
			averageValue += each.score
		})
		return Math.round(((averageValue / 400)* 100))
	}
	render() { 
		return (
			<div className="wrapper">
				<div className="container">
					<div className="results-cont">
						<h1 className="header">
							Your results
						</h1>
						<div className="result">
							<h1 className="num">
								{this.getAverage()}
							</h1>
							<span className="num-text">Of 100</span>
						</div>
						<h1 className="results-status">
							Great
						</h1>
						<p className="results-status-text">
							You scored higher than 65% of the people who have taken these tests !
						</p>
					</div>
					<div className="summary-cont">
						<h1 className="summary-header">
							Summary
						</h1>
						<ul className="item-lists">
							{
								data.map((each, i) => (
									console.log(each.icon),
									<li key={i} className={each.category}>
									<div className="left">
										<img className="icon" src={`results_sum${each.icon}`} alt="" />
										<span className="reaction">{each.category}</span>
									</div>
									<div className="right">
										<span className="points">{each.score}</span>
										<span className="out-of">/100</span>
									</div>
								</li>
								))
							}
						</ul>
						<button className="continue-btn">Continue</button>
					</div>
				</div>
			</div>
		);
	}
}
 
export default ResultsSum;
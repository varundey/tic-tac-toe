import React, {Component} from "react";

export default class Board extends Component {
	constructor(props) {
		super(props);
		const {gridSize} = this.props;
		this.state = {
			playerOneTurn: true,
			grids: Array(gridSize).fill(1).map(_ => Array(gridSize).fill(2))
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		const [row ,column] = event.target.id.split("-");

	}

	render() {
		const {gridSize} = this.props;
		const {grids} = this.state;
		return(
				<div>
					{grids.map((row, rowIndex) => (
							row.map((column, columnIndex) => (
									<Square row={rowIndex} column={column} key={columnIndex} handleClick={this.handleClick}/>
							))
					))}
				</div>
		)
	}
}

export class Square extends Component {
	render() {
		const {
			row,
			column,
			handleClick
		} = this.props;
		return (
				<button id={row+"-"+column} className="square" onClick={(row, column) => handleClick(row, column)}>
					{row} {column}
				</button>
		);
	}
}

import React, {Component} from "react";

import Square from "./Square";

export default class Board extends Component {
	constructor(props) {
		super(props);
		const {gridSize} = this.props;
		const gridMatrix = [];
		for(let row=0; row<gridSize; row += 1) {
			gridMatrix.push([])
		}
		for(let column=0; column<gridSize*gridSize; column += 1) {
			gridMatrix[Math.floor(column/gridSize)].push(null)
		}

		this.state = {
			playerOneTurn: true,
			grids: gridMatrix
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(row ,column) {
		// debugger;
		// const [row ,column] = event.target.id.split("-");
		const {grids, playerOneTurn} = this.state;

		const gridsCopy = grids;
		playerOneTurn ?
				gridsCopy[row][column] = 1
				: gridsCopy[row][column] = 0;
		this.setState({
			grids: gridsCopy
		});
		this.setState({playerOneTurn: !playerOneTurn})
	}

	render() {
		const {grids, playerOneTurn} = this.state;
		return(
			<div className="board">
				{grids.map((row, rowIndex) => (
					<div key={rowIndex} className="row">
						{row.map((column, columnIndex) =>
							<Square row={rowIndex} column={columnIndex} key={rowIndex+"-"+columnIndex}
											handleClick={this.handleClick} token={playerOneTurn ? "X" : "O"}
							/>
						)}
					</div>
				))}
			</div>
		)
	}
}

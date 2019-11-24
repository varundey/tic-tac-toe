import React, {Component} from "react";

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

	handleClick(event) {
		const [row ,column] = event.target.id.split("-");
		const {grids, playerOneTurn} = this.state;

		const gridsCopy = grids;
		playerOneTurn ?
				gridsCopy[row][column] = 1
				: gridsCopy[row][column] = 0;
		this.setState({
			grids: gridsCopy
		});
		this.setState({playerOneTurn: !this.state.playerOneTurn})
	}

	render() {
		const {grids} = this.state;
		return(
			<div className="board">
				{grids.map((row, rowIndex) => (
					<div key={rowIndex} className="row">
						{
							row.map((column, columnIndex) => <Square row={rowIndex} column={columnIndex} key={columnIndex} handleClick={this.handleClick}/>)
						}
						</div>
				)
				)}
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

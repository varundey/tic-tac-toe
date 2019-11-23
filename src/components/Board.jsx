import React, {Component} from "react";

export default class Board extends Component {
	constructor(props) {
		super(props);
		const {gridSize} = this.props;
		this.state = {
			playerOneTurn: true,
			grids: Array(gridSize).fill(1).map(_ => Array(gridSize).fill(2))
		}
	}

	render() {
		const {gridSize} = this.props;
		const {grids} = this.state;
		return(
				<div>
					{grids.map((row, rowIndex) => (
							row.map((column, columnIndex) => (
									<div key={columnIndex}>
										{column}
									</div>
							))
					))}
				</div>
		)
	}
}

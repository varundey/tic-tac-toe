import React, {Component} from "react";

export default class Board extends Component {
	render() {
		const {gridSize} = this.props;
		return(
				<div>
					{gridSize}
				</div>
		)
	}
}

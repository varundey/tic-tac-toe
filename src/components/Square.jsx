import React, {Component} from "react";

export default class Square extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSquareClicked: false,
		};
		this._handleClick = this._handleClick.bind(this);
	}

	_handleClick(event){
		// const stateCopy = this.state;
		this.setState({isSquareClicked: !this.state.isSquareClicked});
		const [row ,column] = event.target.id.split("-");
		this.props.handleClick(row, column)
	}

	render() {
		const {
			row,
			column,
			token
		} = this.props;
		const {isSquareClicked} = this.state;
		return (
				<div id={row+"-"+column} className="square" onClick={this._handleClick}>
					{isSquareClicked ? token : null}
				</div>
		);
	}
}

import React, {Component} from 'react';
import '../styles/App.css';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			gridSize: 3
		}
	}
	render() {
		return (
				<div>
					<label>Enter the grid size:
						<input type="number" defaultValue={3} onChange={ event => this.setState({gridSize: event.target.value})}/>
					</label>
				</div>
		);
	}
}

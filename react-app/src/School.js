import React from 'react';
import {Student} from "./Student";

export class School extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() }
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ date: new Date()})
		}, 1000)
	}
	render() {
		return (
			<div>
				<h2 className="title">Current time: {this.state.date.toLocaleTimeString()} </h2>
				<ul className="student-list">
					{this.props.studentsGrades.map(student => <Student student={student} key={student.id}/>)}
				</ul>
			</div>
		);
	}
}


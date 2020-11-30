import React from 'react';
import styles from './student.module.css';

export class Student extends React.Component {
	render() {
		return (
			<li className={styles.studentItem}>
				My name is {this.props.student.name}, my grade is {this.props.student.grades}
			</li>
		);
	}
}

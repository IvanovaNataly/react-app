import React from 'react';
import styles from './addItem.module.css';

export default class AddItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.addItem}>
				<h1 className={styles.pageTitle}>My Todos</h1>
				<form className={styles.form}>
					<label htmlFor="addItemInput" className={styles.label}>Add Todo</label>
					<input id="addItemInput" type="text" className={styles.input} placeholder="What to do?"/>
					<button className={styles.confirm}>Add</button>
				</form>
			</div>
		)

	}
}
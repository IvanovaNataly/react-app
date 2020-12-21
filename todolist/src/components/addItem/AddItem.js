import React from 'react';
import styles from './addItem.module.css';

export default class AddItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addItemInput: ''
		}
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addItem(e.target.value);
	};

	render() {
		return (
			<div className={styles.addItem}>
				<h1 className={styles.pageTitle}>My Todos</h1>
				<form className={styles.form} onSubmit={this.onSubmit}>
					<label htmlFor="addItemInput" className={styles.label}>Add Todo</label>
					<input id="addItemInput"
						   name="addItemInput"
						   type="text"
						   className={styles.input}
						   placeholder="What to do?"
							value={this.state.addItemInput}
							onChange={this.onSubmit}/>
					<button className={styles.submit}>Add</button>
				</form>
			</div>
		)

	}
}
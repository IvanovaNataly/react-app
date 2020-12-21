import React from 'react';
import styles from './addItem.module.css';

export default class AddItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addItemInput: ''
		}
	}

	onChange = (e) => {
		this.setState({ addItemInput: e.target.value })
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.addItemInput) this.props.addItem(this.state.addItemInput);
		this.setState({ addItemInput: '' });
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
							onChange={this.onChange}/>
					<button className={styles.submit}>Add</button>
				</form>
			</div>
		)

	}
}
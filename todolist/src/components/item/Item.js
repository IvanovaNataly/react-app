import React from 'react';
import styles from './item.module.css';

export default class Item extends React.Component {
	constructor(props) {
		super(props);
	}

	onChange = (e) => {
		console.log(e.target.checked);
		this.props.checkItemDone(this.props.item.id, e.target.checked);
	};

	onRemoveItem = () => {
		if (this.props.item.done) this.props.removeItem(this.props.item.id);
	};

	render() {
		const item = this.props.item;
		return (
			<li className={`${styles.item} ${styles.control} ${this.props.item.done ? styles.done : ''}`}>
				<label htmlFor={`item-${item.id}`}
					   className={`${styles.itemLabel} ${styles.controlCheckbox}`}>
					<input id={`item-${item.id}`}
						   type="checkbox"
						   className=""
							checked={this.props.item.done}
							onChange={this.onChange}/>
					<div className={styles.controlIndicator}/>
					<span className={styles.controlName}>{item.name}</span>
					{ this.props.item.done ?
						<button className={styles.itemRemove} onClick={this.onRemoveItem}>Remove</button> : null }
				</label>
			</li>
		)
	}
}

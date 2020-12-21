import React from 'react';
import styles from './item.module.css';

export default class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toRemove: false
		};
	}

	onRemoveItem = () => {
		this.props.removeItem(this.props.item.id);
	};

	render() {
		const item = this.props.item;
		return (
			<li className={`${styles.item} ${styles.control}`}>
				<label htmlFor={`item-${item.id}`} className={`${styles.itemLabel}  ${styles.controlCheckbox}`}>
					<input id={`item-${item.id}`} type="checkbox" className=""/>
					<div className={styles.controlIndicator}/>
					<span className={styles.controlName}>{item.name}</span>
					<button className={styles.itemClose} onClick={this.onRemoveItem}>Remove</button>
				</label>
			</li>
		)
	}
}

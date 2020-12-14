import React from 'react';
import styles from './item.module.css';

export default class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toRemove: false
		};
		this.onRemoveItem = this.onRemoveItem.bind(this);
	}

	onRemoveItem = () => {
		this.setState({ toRemove: true });
	};

	render() {
		const item = this.props.item;
		return (
			<li className={`${styles.item} ${styles.control} ${this.state.toRemove ? styles.removed : ""}`}>
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

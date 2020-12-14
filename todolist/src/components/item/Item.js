import React from 'react';
import styles from './item.module.css';

export default class Item extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		const item = this.props.item;
		return (
			<li className={`${styles.item} ${styles.control}`}>
				<label for={`item-${item.id}`} className={`${styles.itemLabel}  ${styles.controlCheckbox}`}>
					<input id={`item-${item.id}`} type="checkbox" className=""/>
					<div className={styles.controlIndicator}/>
					{item.name}
					<button className={styles.itemClose}>Close</button>
				</label>
			</li>
		)
	}
}

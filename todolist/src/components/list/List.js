import React from 'react';
import Item from "../item/Item";
import styles from './list.module.css';
import AddItem from "../addItem/AddItem";

let theList = [
	{
		id: 1,
		name: 'wash hands',
		done: false
	},
	{
		id: 2,
		name: 'close eyes',
		done: false
	},
	{
		id: 3,
		name: 'wash hands',
		done: false
	},
	{
		id: 4,
		name: 'close eyes',
		done: false
	},
	{
		id: 5,
		name: 'wash hands',
		done: false
	},
	{
		id: 6,
		name: 'close eyes',
		done: false
	}
];

export default class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: theList
		};
	}

	removeItem = (itemRemovedId) => {
		theList = theList.filter(item => itemRemovedId !== item.id);
		this.setState({ list: theList });
	};
	
	render() {
		return (
			<ul className={styles.list}>
				<AddItem/>
				{this.state.list.map(item => <Item key={item.id} item={item} removeItem={this.removeItem}/>)}
			</ul>
		);
	}
}
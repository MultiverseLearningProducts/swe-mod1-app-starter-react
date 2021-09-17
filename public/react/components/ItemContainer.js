import React, { useState } from 'react';
import { Item } from './Item';

export const ItemContainer = (props) => {
	const {onAdd} = props; // props.onAdd
	const {onView}=props;

	return (
		<div className="item-container">
		{
			props.items.map((item, idx) => {
				return <Item onAdd={onAdd} onView={} item={item} key={idx} />;
			
			})

		}
		</div>
	)
} 

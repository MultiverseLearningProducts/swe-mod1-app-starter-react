import React, { useState } from 'react';
import { Item } from './Item';

export const ItemContainer = (props) => {
	const {onAdd} = props; // props.onAdd
	

	return (
		<div className="item-container">
		{
			props.items.map((item) => {
				return <Item onAdd={onAdd} item={item} key={item.id} />;
			
			})

		}
		</div>
	)
} 

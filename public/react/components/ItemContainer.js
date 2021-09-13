import React, { useState } from 'react';
import { Item } from './Item';

export const ItemContainer = (props) => {
	return (
		<div className="item-container">
		{
			props.items.map((item, idx) => {
				return <Item item={item} key={idx} />
			})
		}
		</div>
	)
} 

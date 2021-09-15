import React from 'react';
import renderer from 'react-test-renderer';

import { ItemContainer } from './ItemContainer';

describe("Item container component", () => {
  test("Contains items passed down as props", () => {
    const plants = ['Adipiscing Cursus', 'Eled Doming','Fringilla Augue'];
    const component = renderer.create(<ItemContainer items={plants}/>);
    const treeEl = component.toTree()

    expect(treeEl.props.items.length).toBe(2)
  })
})
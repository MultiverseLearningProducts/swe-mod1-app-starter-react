import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import { ItemContainer } from "./ItemContainer";

describe("Item container component", () => {
  test("renders Item Container component as expected", () => {
    const plants = [
      {
        name: "Fan Flower",
        image:
          "https://cdn.shopify.com/s/files/1/0317/0687/3992/products/191-large_default_bdf68ca7-5284-412c-9fec-78235d9cd046.jpg?v=1580438028",
        price: "12.99",
        type: "plant",
        description:
          "Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Phasellus dolor",
      },
    ];

    const component = renderer.create(
      <MemoryRouter>
        <ItemContainer items={plants} />
      </MemoryRouter>
    );
    console.log("Our Snapshot  ", snapshot);

    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test("Contains items passed down as props", () => {
    const plants = ["Adipiscing Cursus", "Eled Doming", "Fringilla Augue"];
    const component = renderer.create(
      <MemoryRouter initialEntries={["/plants"]}>
        <ItemContainer items={plants} />
      </MemoryRouter>
    );
    const treeEl = component.toTree();

    // console.log("What is in treeEl? " + treeEl);

    // console.log(
    //   "What is in treeEl.props? " + JSON.stringify(treeEl.props.children.props)
    // );

    expect(treeEl.props.children.props.items.length).toBe(3);
  });

  // test("Invokes onAdd function when clicked", () => {
  //   const plants = ["Adipiscing Cursus", "Eled Doming", "Fringilla Augue"];

  //   const stub = () => "clicked!!!";

  //   //Mock item
  //   const component = renderer.create(
  //     <MemoryRouter initialEntries={["/plants"]}>
  //       <ItemContainer items={plants} onAdd={stub} />
  //     </MemoryRouter>
  //   );

  //   //Let's unspool the tree
  //   const treeEl = component.toTree();

  //   console.log("Looking for onAdd " + treeEl);

  //   expect(treeEl.props.onAdd()).toBe("clicked!!!");
  // });
});

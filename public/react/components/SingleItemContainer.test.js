import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import SingleItemContainer from "./SingleItemContainer";

describe("Single Item container component", () => {
  test("renders Single Item Container component as expected", () => {
    const plant = {
      name: "Fan Flower",
      image:
        "https://cdn.shopify.com/s/files/1/0317/0687/3992/products/191-large_default_bdf68ca7-5284-412c-9fec-78235d9cd046.jpg?v=1580438028",
      price: "12.99",
      type: "plant",
      description:
        "Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Phasellus dolor",
    };
    const component = renderer.create(
      <MemoryRouter initialEntries={["/plant/1"]}>
        <SingleItemContainer item={plant} />
      </MemoryRouter>
    );
    // console.log("What does our snapshot look like?  ", snapshot);
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  // test("Invokes addItem function when clicked", () => {
  //   const plant = {
  //     name: "Fan Flower",
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0317/0687/3992/products/191-large_default_bdf68ca7-5284-412c-9fec-78235d9cd046.jpg?v=1580438028",
  //     price: "12.99",
  //     type: "plant",
  //     description:
  //       "Fusce fermentum odio nec arcu. Praesent vestibulum dapibus nibh. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Phasellus dolor",
  //   };
  //   const stub = () => "clicked!!!";
  //   //Mock item
  //   const component = renderer.create(
  //     <MemoryRouter initialEntries={["/plant/1"]}>
  //       <SingleItemContainer item={plant} onAdd={stub} />
  //     </MemoryRouter>
  //   );
  //   //Let's unspool the tree
  //   const treeEl = component.toTree();
  //   //console.log("What does our tree look like?", treeEl);
  //   expect(treeEl.props.addItem()).toBe("clicked!!!");
  // });
});

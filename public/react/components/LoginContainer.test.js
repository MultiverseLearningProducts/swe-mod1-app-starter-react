import React from 'react';
import renderer from 'react-test-renderer';
import { LoginContainer } from './LoginContainer';
import 'regenerator-runtime/runtime';
import {MemoryRouter as Router} from 'react-router-dom';

// Unit testing Login Container
describe("Login component", () => {
  test("Contains items passed down as props", () => {
    const studentsList = [{"studentId" : 2, "firstName" : "Ben", "lastName" : "Tate", "campus" : "Mars"}, {"studentId" : 5, "firstName" : "Eric", "lastName" : "Taylor", "campus" : "Mars"}];

    const component = renderer.create(<Router><LoginContainer /></Router>);
    const json = component.toJSON()
    console.log("component props: ", json)
    expect(json.children.length).toBe(2)

  })
  test("renders Login component as expected", () => {
    const component = renderer.create(<Router><LoginContainer /></Router>);
    const snapshot = component.toJSON();

    console.log("What does our snapshot look like?  ", snapshot)

    expect(snapshot).toMatchSnapshot();

  })
})


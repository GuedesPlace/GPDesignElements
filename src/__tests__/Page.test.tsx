import renderer from 'react-test-renderer';
import {Page} from '../components/page';
import React from 'react';

it('changes the class when hovered', () => {
  const component = renderer.create(
   <Page title="Hello World"></Page>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
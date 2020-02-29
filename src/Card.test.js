import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe ('Card component', () => {
  it ('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Card title="card-test" content="card-content"/>, div)

    ReactDOM.unmountComponentAtNode(div);
  });

  it ('renders the UI as expected', () => {
    const tree = renderer
    .create(<Card title="card-test" content="card-content"/>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  })
})

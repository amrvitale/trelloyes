import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';

describe ('List component', () => {
  it('renders without crashing', () => {
    const section = document.createElement('section');
    ReactDOM.render(
      <List
      key ='0'
      header="Test Header"
      cards={["1", "2"]}
      />, section);

    ReactDOM.unmountComponentAtNode(section);
  });

  it ('renders the UI as expected', () => {
  const tree = renderer
    .create(<List key = '0' header = 'test' cards ={["1"]}/>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

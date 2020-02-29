import React, {Component} from 'react';
import List from './List'
import './styles/App.css'

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

render() {
  const { store } = this.props
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {store.lists.map(list => (
          <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id=> store.allCards[id])}
          />
        ))}
        </div>
      </main>
    );
  }
}

export default App;


//./src/store.js can be passed to App as store prop
//App sould render markup matching design.html
//main element, header with h1 and div with class 'App-list'
//App component accept 1 prop: store
//store prop is object with 2 keys: lists and allCards
//lists is array of objects
//allCards is object where each key is a card's ID and value is card object with title and content
//should render a list component for each of the items in store.lists array
//each instance of list component should be passed 2 props and a key
//2 props are header and cards
//header prop is string for list's header
//cards prop is array of card objects
//need to combine cardIds array for list with allCards object

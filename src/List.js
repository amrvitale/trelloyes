//list component should render markup matching design.html
//section wtih class of 'List' contain header and div with class of 'List-cards'
//List component accepts 2 props: header and cards
//header = string of header of card to render
// cards is array of card objects, each object has title and content
//props will be passed in for each list from app component
//List should render card componentfor each of cards in cards array prop
//Each instance of card componnent should be passed 2 props and a key
//2 props = title and content
//title prop is string for card's title
// content prop is string of card's content
import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            onClickDelete={props.onClickDelete}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick={() => props.onClickAdd(props.id)}
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}

List.defaultProps = {
  onClickAdd: () => {},
}

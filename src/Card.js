//card component should render markup matching design.html
//div with class of 'Card' containing h3 for card title and p element for card's content
// card component accepts 2 props: title and content
//title is string of card's title
//content is string of card's content
//props will be passed in for each card from list component

import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='Card'>
      <button
        type='button'
        onClick={() => props.onClickDelete(props.id)}
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

Card.propTypes = {
  onClickDelete: () => {}
}

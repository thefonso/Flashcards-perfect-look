import frontCard from '../../Images/frontCard.png'
import backCard from '../../Images/backCard.png'
import './FlipCards.scss'
import OneCard from './OneCard'
import { React, useState } from 'react'

export default function FlipCards({ cards, deck }) {
  console.log("FlipCards")

  //grab transformed cards array and make it a newCards state
  const [newCards, setnewCards] = useState(cards);


  function flipCard(index) {
    // TODO flip only the card with id 1
    console.log("flipCard index: " + index)
    setnewCards((prevState) =>
      prevState.map((newCard) =>
        newCard.id === index ? { ...newCard, checked: !newCard.checked } : newCard
      )
    );
  }


  return (
    <>
      {/* nav begins here */}
      {newCards.map(({ front, back, id, checked },index) =>
        <OneCard
          cards={cards}
          index={index}
          checked={checked}
          front={front}
          back={back}
          flipCard={flipCard}
          key={id}
          frontCard={frontCard}
          backCard={backCard}
        />
      )}
      <input type="radio" name="cards" className="card-checkbox" id="put-cards-down" />
    </>
  )
}

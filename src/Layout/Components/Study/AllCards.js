import frontCard from '../../Images/frontCard.png'
import backCard from '../../Images/backCard.png'
import './AllCards.scss'
import OneCard from './OneCard'
import { React, useState, useEffect, useRef, createRef } from 'react'



export default function AllCards({ cards, deck }) {
  console.log("AllCards")
  console.log(cards) // Array<{  }>;
  console.log("deck")
  console.log(deck)



  //grab transformed cards array and make it a newCards state
  const [newCards, setnewCards] = useState(cards);


  function flipCard(index) {
    // TODO flip only the card with id 1
    // setState of front
    console.log("flipCard index: " + index)
    //console.log("front "+front)
    //console.log("card.front: "+card.front)
    //console.log("card.back: "+card.back)
    setnewCards((prevState) =>
      prevState.map((newCard) =>
        newCard.id === index ? { ...newCard, checked: !newCard.checked } : newCard
      )
    );
    // if (front) {
    // setFront(false)
    // } else {
    // setFront(true)
    // }
  }


  // TODO - flip only one card.... not all cards at same time
  // TODO - Banner Top - fix responsiveness so words always  appear
  // TODO - Center layout on iPad Mini
  // TODO - Study Deck view - add thick boarder on "Back"
  // TODO - New row for "Flip" button
  // TODO - fullscreen Desktop study view layout needs fixin

  return (
    <>
      {/* nav begins here */}
      {/*TODO snatch deck-body into new component*/}
      {/* deck-bottom? */}

      {newCards.map(({ front, back, id, checked },index) =>
        /* index === cardNumber - 1 ? ( */
        // NOTE extract into child component?
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
        /* ) : null, */
      )}

      <input type="radio" name="cards" className="card-checkbox" id="put-cards-down" />
    </>
  )
}

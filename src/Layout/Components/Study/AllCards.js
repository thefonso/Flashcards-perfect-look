import frontCard from '../../Images/frontCard.png'
import backCard from '../../Images/backCard.png'
import './AllCards.scss'
import OneCard from './OneCard'
import { React, useState, useEffect, useRef, createRef } from 'react'



export default function AllCards({ cards }) {
  console.log("AllCards")
  console.log(cards) // Array<{  }>;

//  const [newCards, setnewCards] = useState(cards);
  //const [front, setFront] = useState(true);
  // TODO .push {checked: true} onto cards array?
  //card.checked = true

  const labelRef = useRef()

  useEffect(() => {
    cards.map((card) => {
      console.log("card map thing")
      card.checked = true
    })

    //run after component mounted
    const timeoutId = setTimeout(() => {
      labelRef.current.click();//trigger click 1 seconds
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [])



  function onClickLabel(index) {
    // console.log("hiii"+index);
  }

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
      <ul id="nav">
        <li className="lowercase">
          <label htmlFor="put-cards-down">(Restart)</label>
        </li>
        {newCards.map((newCard, index) =>
          <li key={index}>
            {(index == 1) ? (
              <label id={`item-${index}`} ref={labelRef} onClick={onClickLabel(index)} htmlFor={`toggle-card-${index + 1}`}>
                one Card {index + 1}
              </label>
            ) : (
              <label id={`item-${index}`} onClick={onClickLabel(index)} htmlFor={`toggle-card-${index + 1}`}>
                two Card {index + 1}
              </label>
            )}
          </li>
        )}
      </ul>
      {/* front-card */}
      <h1 id="title"></h1>
      <div id="description">Click card number above to start</div>

      {/* deck-bottom? */}

      {newCards.map(({front, back, id, checked }) =>
        /* index === cardNumber - 1 ? ( */
        // NOTE extract into child component?
        <OneCard
          cards={cards}
          index={id}
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

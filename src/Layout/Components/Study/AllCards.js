import frontCard from '../../Images/frontCard.png'
import backCard from '../../Images/backCard.png'
import React from 'react'
import './AllCards.scss'
import {useEffect, useRef, createRef} from 'react'

export default function AllCards({ cards, cardNumber, setCardNumber, front, setFront, history, }) {

  const labelRef = useRef()

  useEffect(()=>{
     //run after component mounted
    const timeoutId = setTimeout(()=> {
     labelRef.current.click();//trigger click 1 seconds
    }, 1000)

    return () => clearTimeout(timeoutId)
  },[])

  const onClickLabel = (index) =>{
    console.log("hiii");
  }


  function flipCard() {
    if (front) {
      setFront(false)
    } else {
      setFront(true)
    }
  }

  function nextCard(index, total) {
    if (index < total) {
      setCardNumber(cardNumber + 1)
      setFront(true)
    } else {
      if (window.confirm('Restart? Click cancel to return to the home page.')) {
        setCardNumber(1)
        setFront(true)
      } else {
        history.push('/')
      }
    }
  }


  function nextButton(cards, index) {
    if (front) {
      return null
    } else {
      return (
        <button
          className="btn btn-primary mx-1"
          onClick={() => nextCard(index + 1, cards.length)}
        >
          Next
        </button>
      )
    }
  }

//TODO - flip only one card.... not all cards at same time
  // onload....display FIRST card not last card

  return (
    <React.Fragment>
      {/* nav here? */}
      <ul id="nav">
        <li className="lowercase">
          <label htmlFor="put-cards-down">(Restart)</label>
        </li>
        {cards.map((card, index) =>
          <li key={index}>
            {(index == 0) ? (
             <label id={`item-${index}`} ref={labelRef} onClick={onClickLabel(index)} htmlFor={`toggle-card-${index + 1}`}>Card {index + 1}</label>
            ):(
             <label id={`item-${index}`} onClick={onClickLabel(index)} htmlFor={`toggle-card-${index + 1}`}>Card {index + 1}</label>
            )}
          </li>
        )}
      </ul>
      {/* front-card */}
      <h1 id="pen-title"></h1>
      <div id="pen-description">Click card number above to start</div>

      {/* deck-bottom? */}

      {cards.map((card, index) =>
        /* index === cardNumber - 1 ? ( */
          <React.Fragment key={index}>
            <input type="radio" name="cards" className="card-checkbox" id={`toggle-card-${index +1}`} />
            <div className="studycard card" key={index}>
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <div className="col-8">
                    <h5 className="card-title">
                      {`Card ${index + 1} of ${cards.length}`}
                    </h5>
                    <p className="card-text">{front ? card.front : card.back}</p>

                    <button className="btn btn-secondary mx-1" onClick={flipCard}>
                      Flip
                    </button>
                  </div>
                  <div className="col-4">
                    {
                      <img
                        src={front ? frontCard : backCard}
                        className="img-fluid"
                        alt="cards"
                      ></img>
                    }
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        /* ) : null, */
      )}

      <input type="radio" name="cards" className="card-checkbox" id="put-cards-down"/>
    </React.Fragment>
  )
}

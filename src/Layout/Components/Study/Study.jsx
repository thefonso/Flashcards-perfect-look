import React, { useEffect, useState, useRef } from 'react';
import { readDeck } from '../../../utils/api';
import { useHistory, useParams } from 'react-router-dom';
import NoCards from './NoCards';
import FlipCards from './FlipCards';
import BreadCrumb from '../Shared/BreadCrumb';
import ReactLoading from 'react-loading';
import ErrorAlert from '../Shared/ErrorAlert';
import DeckNav from './DeckNav';

export default function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [cardNumber, setCardNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const labelRef = useRef()


  useEffect(() => {
    setError(null)
    setDeck({})
    setCards([])
    getData(deckId)
     //runs after component mounted
    cards.map((card) => {
      console.log("useEffect cards map card: ")
      console.log(card)
      card.checked = true
    })

    const timeoutId = setTimeout(() => {
      console.log("labelRef: ");
      console.log(labelRef);
      labelRef.current.click();//finds current (card) and "clicks" it so it floats above deck
    }, 1000)//trigger a click in 1 secs

    return () => clearTimeout(timeoutId)
  }, [deckId])



  
  async function getData(deckId) {
    const abortController = new AbortController()
    try {
      const response = await readDeck(deckId, abortController.signal)
      setDeck(response)
      setCards(response.cards)
      setIsLoading(true)
    } catch (error) {
      console.log(error)
      setError(error)
    }
    return () => {
      abortController.abort()
    }
  }

  return (
    <main id="study" className="flex-container">
      <ErrorAlert error={error} />
      {!isLoading ? (
        <ReactLoading
          type={'bubbles'}
          color={'#000'}
          width={100}
          height={100}
          className="mx-auto mt-5"
        />
      ) : (
        <>
          <BreadCrumb deckId={deckId} name={deck.name} screen={'Study'} />
          {cards.length > 2 ?(
            <DeckNav deck={deck} cards={cards} labelRef={labelRef}/>
          ) : (
             <span>no cards in deck</span>
          )}
            <div id="flipcard" className="study-box">
            {cards.length > 2 ?(
                <FlipCards
                  deck={deck}
                  cards={cards}
                  cardNumber={cardNumber}
                  setCardNumber={setCardNumber}
                  history={history}
                />
              ) : (
                <NoCards cards={cards} deck={deck} />
              )}
            </div>

        </>
      )}
    </main>
  )
}

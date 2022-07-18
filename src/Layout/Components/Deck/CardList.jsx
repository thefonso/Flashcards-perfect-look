import React from 'react'
import { Link } from 'react-router-dom'
import './CardList.css'

export default function CardList({handleDelete, cards, id}) {
  return (
    <div className="card-body">
      <h2 className="card-title">Cards</h2>
      {cards.length > 0 ? (
        cards.map((card, index) => {
          return (
            <div className="carddesign card mb-4" key={index}>
              <div className="card-body d-flex flex-lg-row flex-column p-0">
                <div className="col bg-align-self-center p-4">
                  <p>{card.front}</p>
                </div>
                <div className="col back-color text-white p-4">
                  <p>{card.back}</p>
                  <div className="button-bottom"><div className="text-right">
                    <Link
                      to={`/decks/${id}/cards/${card.id}/edit`}
                      className="btn btn-secondary mr-2"
                    >
                      Edit
                    </Link>
                    {/* <button */}
                    {/*   className="btn btn-danger" */}
                    {/*   onClick={() => handleDelete(card)} */}
                    {/* > */}
                    {/*   Delete */}
                    {/* </button> */}
                  </div></div>
                </div>
              </div>
            </div>
          )
        })
      ) : (
        <>
          <h4>No Cards</h4>
          <p>Please add some cards to the deck</p>
        </>
      )}
    </div>
  )
}

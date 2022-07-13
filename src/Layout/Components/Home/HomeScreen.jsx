import { Link } from 'react-router-dom'
import React from 'react'
import './HomeScreen.css'

export default function HomeScreen({ decks, handleDelete }) {
  const myStyle = {
    transform: "rotateZ(6deg)",
    top: "7px"
  }
  return (
    <main className="container">
      <Link className="btn btn-lg btn-primary btn-block mb-4" to="/decks/new">
        <i className="bi bi-plus-lg mr-2"></i>
        Create Deck
      </Link>
      <div className="d-flex flex-lg-row flex-column flex-wrap justify-content-lg-around" style={{ maxWidth: '100%' }}>
        {decks.map((deck) => {
          return (
            <div className="mb-4 mx-2 bg-light p-0 col-lg-5" key={deck.id}>
              {/* TODO: refactor out this repeated element */}
              <div className="deck">
                <div className="flashcard card" style={{ top: "0px" }}>
                  <div className="card-header bg-dark text-light">
                    <h3 className="card-title">Hi Kosh{deck.name}</h3>
                    <h5 className="card-subtitle">{deck.cards.length} cards</h5>
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <p className="card-text">{deck.description}</p>
                    <div className="d-flex row justify-content-around">
                      <Link className="btn btn-success" to={`/decks/${deck.id}`}>
                        <i className="bi bi-eye mr-2" alt="eye"></i>
                        Edit Deck
                      </Link>
                      <Link className="btn btn-primary" to={`/decks/${deck.id}/study`}>
                        <i className="bi bi-book mr-2" alt="book"></i>
                        Study
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flashcard card" style={{ transform: "rotateZ(-4deg)", top: "1px" }}>
                  <div className="card-header bg-dark text-light">
                    <h3 className="card-title">Hi Kosh{deck.name}</h3>
                    <h5 className="card-subtitle">{deck.cards.length} cards</h5>
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <p className="card-text">{deck.description}</p>
                    <div className="d-flex row justify-content-around">
                      <Link className="btn btn-success" to={`/decks/${deck.id}`}>
                        <i className="bi bi-eye mr-2" alt="eye"></i>
                        Edit Deck
                      </Link>
                      <Link className="btn btn-primary" to={`/decks/${deck.id}/study`}>
                        <i className="bi bi-book mr-2" alt="book"></i>
                        Study
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flashcard card" style={{ transform: "rotateZ(5deg)", top: "7px" }}>
                  <div className="card-header bg-dark text-light">
                    <h3 className="card-title">Hi Kosh{deck.name}</h3>
                    <h5 className="card-subtitle">{deck.cards.length} cards</h5>
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <p className="card-text">{deck.description}</p>
                    <div className="d-flex row justify-content-around">
                      <Link className="btn btn-success" to={`/decks/${deck.id}`}>
                        <i className="bi bi-eye mr-2" alt="eye"></i>
                        Edit Deck
                      </Link>
                      <Link className="btn btn-primary" to={`/decks/${deck.id}/study`}>
                        <i className="bi bi-book mr-2" alt="book"></i>
                        Study
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

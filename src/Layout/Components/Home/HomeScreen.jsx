import { Link } from 'react-router-dom'
import React from 'react'
import './HomeScreen.scss'

export default function HomeScreen({ decks }) {
  const myStyle = [
    {
      transform: "rotateZ(5deg)",
      top: "5px"
    },
    {
      transform: "rotateZ(-5deg)",
      top: "1px"
    },
    {
      transform: "rotateZ(0deg)",
      top: "0px"
    }
  ]
  //TODO make this CHILD a seperate componet and import it
  const Child = ({mystyle, id, name, length, description }) => {
    return (
      <div className="flashcard card" key={id} style={mystyle}>
        <div className="card-header bg-dark text-light">
          <h3 className="card-title">{name}</h3>
          <h5 className="card-subtitle">{length} cards</h5>
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <p className="card-text">{description}</p>
          <div className="d-flex row justify-content-around">
            <Link className="btn btn-success" to={`/decks/${id}`}>
              <i className="bi bi-eye mr-2" alt="eye"></i>
              Edit Deck
            </Link>
            <Link className="btn btn-primary" to={`/decks/${id}/study`}>
              <i className="bi bi-book mr-2" alt="book"></i>
              Study
            </Link>
          </div>
        </div>
      </div>
    )
  }
  //   TODO make this a button sitting on a table

  return (
    <main id="homescreen">
      <div id="create-deck-button">
        <Link className="round btn btn-lg btn-primary" to="/decks/new">
        New Deck
        </Link>
      </div>
      <div className="container-4-deck-container">
        {decks.map((deck,index) => {
          return (
            <div className="deck-container" key={deck.id}>
              {/* TODO: refactor out this repeated element */}
              <div className="deck">
                {/* TODO: loop for three? */}
                {(()=>{
                  let posts = []
                  for(let i = 0; i <= myStyle.length; i++){
                    posts.push(<Child mystyle={myStyle[i]} key={i} id={deck.id} name={deck.name} description={deck.description} length={deck.cards.length} />)
                  }
                  return posts;
                })()}

              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

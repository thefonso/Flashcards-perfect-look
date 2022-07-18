import { Link } from 'react-router-dom'
import React from 'react'
import './HomeScreen.css'

export default function HomeScreen({ decks, handleDelete }) {
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
  const Child = ({ mystyle, id, name, length, description }) => {
    return (
      <div className="flashcard card" style={mystyle}>
        <div className="card-header bg-dark text-light">
          <h3 className="card-title">Hi Kosh{name}</h3>
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
  // const fields = [];
  // for (let i = 1; i <= 3; i++) {
  //   if (i = 1){
  //     fields.push(<Fields myStyle={myStyle} deck={deck} key={i} />)
  //   }
  //   if(i = 2){
  //     fields.push(<Fields prop={myStyle2} deck={deck} key={i} />)
  //   }
  //   if(i = 3){
  //      fields.push(<Fields prop={myStyle3} deck={deck} key={i} />)
  //   }
  // }
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
                {/* TODO: loop for three? */}
                {(()=>{
                  let posts = []
                  for(let i = 0; i <= myStyle.length; i++){
                      posts.push(<Child mystyle={myStyle[i]} id={deck.id} name={deck.name} description={deck.description} length={deck.cards.length} />)
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

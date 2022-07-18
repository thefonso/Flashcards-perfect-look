import React from "react";
import { Link } from "react-router-dom";

export default function DeckInfo({ id, deck, handleDelete}) {
    return (
        <div className="deck-body">
          <h2>Deck: </h2><h4 className="card-title">{deck.name}</h4>
        <p className="card-text">{deck.description}</p>
        <Link to={`/decks/${id}/edit`} className="btn btn-secondary mr-2">
          Edit Deck
        </Link>
        {/* <Link to={`/decks/${id}/study`} className="btn btn-primary mr-2"> */}
        {/*   Study Deck */}
        {/* </Link> */}
        <Link
          to={`/decks/${id}/cards/new`}
          className="btn btn-primary mr-2"
        >
          Add Cards
        </Link>
        <button
          type="button"
          className="btn btn-danger "
          onClick={() => handleDelete(deck)}
        >
          Delete Deck
        </button>
      </div>
    )
}

import React from 'react';

export default function DeckNav({deck,cards,labelRef }) {

  return (
    <div className="deck-body">
       <h2>Study: {deck.name}</h2>
        <ul id="nav">
          <li className="lowercase">
            <label htmlFor="put-cards-down">(Restart)</label>
          </li>
          {cards.map((card, index) =>
            <li key={index}>
              {(index == 0) ? (
                <label id={`item-${index}`} ref={labelRef} htmlFor={`toggle-card-${index + 1}`}>
                  one Card {index + 1}
                </label>
              ) : (
                <label id={`item-${index}`} htmlFor={`toggle-card-${index + 1}`}>
                  two Card {index + 1}
                </label>
              )}
            </li>
          )}
        </ul>
        {/* front-card */}
        <h1 id="title"></h1>
        <div id="description">Click card number above to start</div>

    </div>
  );
}

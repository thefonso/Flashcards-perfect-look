import React from 'react';

export default function DeckNav({ deck, cards, labelRef }) {
function fade(){
  document.getElementById("nav").style.display="none";
}
  return (
    <div id="deck-nav">
      <ul id="nav">
        <li className="lowercase">
          <label id="restart-button" htmlFor="put-cards-down">
            { /*Restart */ }
          </label>
        </li>
        {cards.map((card, index) =>
          <li className="lowercase" key={index}>
            {(index === 0) ? (
              <label id={`item-${index}`} ref={labelRef} htmlFor={`toggle-card-${index + 1}`} onClick={() => fade()}>
                Begin
              </label>
            ) : (
              <>
              </>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}

import React from 'react';

export default function OneCard({ front, back, cards, index, checked, flipCard, frontCard, backCard }) {
  console.log("OneCard index: "+index)
  return (
    <>
      <input type="radio" name="cards" className="card-checkbox" id={`toggle-card-${index + 1}`} />
      <div className="studycard" id={index + 1}>
        <div className="card-body">
          <div className="flex-container">
            <div className="">
              <h5 className="card-title">
                {`Card ${index + 1} of ${cards.length}`}
              </h5>
              <p className="card-text">{checked ? front : back}</p>

              <button className="btn btn-secondary mx-1" onClick={() => flipCard(index + 1)}>
                Flip
              </button>
            </div>
            <div className="">
              {
                <img
                  src={checked ? frontCard : backCard}
                  className="img-fluid"
                  alt="cards"
                ></img>
              }
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

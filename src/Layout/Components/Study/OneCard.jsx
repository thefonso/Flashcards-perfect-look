import React from 'react';

export default function OneCard({ front, back, cards, index, checked, flipCard, frontCard, backCard }) {
  console.log("OneCard: "+index)
  return (
    <>
      <input type="radio" name="cards" className="card-checkbox" id={`toggle-card-${index + 1}`} />
      <div className="studycard card" id={index + 1}>
        <div className="card-body">
          <div className="d-flex flex-row justify-content-between">
            <div className="col-8">
              <h5 className="card-title">
                {`Card ${index + 1} of ${cards.length}`}
              </h5>
              <p className="card-text">{checked ? front : back}</p>

              <button className="btn btn-secondary mx-1" onClick={() => flipCard(index + 1)}>
                Flip
              </button>
            </div>
            <div className="col-4">
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

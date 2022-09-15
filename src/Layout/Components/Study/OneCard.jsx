import React from 'react';


export default function OneCard({ front, back, cards, index, checked, flipCard, frontCard, backCard }) {
  console.log("OneCard index: " + index)


function restart(){
  console.log("restart function called")
  document.getElementById("restart-button").click();
  //TODO set #nav display:flex
  document.getElementById("nav").style.display="flex";
}


  return (
    <>
      <input type="radio" name="cards" className="card-checkbox" id={`toggle-card-${index + 1}`} />
      <div className="studycard" id={index + 1}>
        <div className="card-body">
          <div className="flex-container">

            <div className="top-row">
              <div className="title-and-body">
                <h5 className="card-title">
                  {`Card ${index + 1} of ${cards.length}`}
                </h5>
                <p className="card-text">{checked ? front : back}</p>
              </div>

              <div className="front-back-deck-image">
                <button className="btn btn-outline-dark mx-1" onClick={() => flipCard(index + 1)}>
                  Flip
                  <img src={checked ? frontCard : backCard} className="img-fluid" alt="cards"></img>
                </button>
              </div>
            </div>

            <div className="prev-next-buttons">
              {index === 0 ?(<></>
              ):(
                <button className="btn btn-outline-dark mx-1">
                <label htmlFor={`toggle-card-${index}`}>
                  Prev
                </label>
                </button>
              )}

              {(index !== (cards.length - 1) )?(
              <button className="btn btn-outline-dark mx-1">
                <label htmlFor={`toggle-card-${index + 2}`}>
                  Next
                </label>
              </button>
              ):(
                <button className="btn btn-outline-dark mx-1" onClick={()=> restart()}>
                 Done
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </>

  );
}

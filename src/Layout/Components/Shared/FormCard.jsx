import React from 'react'
import { Link } from 'react-router-dom'

export default function FormCard({
  handleSubmit,
  handleChange,
  valueFront,
  valueBack,
  deckId,
  cancel,
  submit,
  value
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          className="form-control"
          id="front"
          name="front"
          rows="3"
          placeholder="Front side of card"
          onChange={handleChange}
          value={valueFront}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
          className="form-control"
          id="back"
          name="back"
          rows="3"
          placeholder="Back side of card"
          onChange={handleChange}
          value={valueBack} //NOTE: see CONTROLLED form input notes in handleChange in AddCard / EditCard
          required
        ></textarea>
      </div>
      <Link to={`/decks/${deckId}`} className="btn btn-secondary mb-4 mr-3">
        {cancel}
      </Link>
      <button type="submit" className="btn btn-primary mb-4">
        {submit}
      </button>
    </form>
  )
}

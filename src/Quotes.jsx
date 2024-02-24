import "./quotes.css"

function Quotes({ quote }) {
  console.log(quote)
  return (
    <div className="quote-container">
      {quote == "" ? (
        <>
          <p className="quote">Waiting for Insperation</p>
        </>
      ) : (
        <>
          <p className="quote">{quote.content}</p>
          <p className="author">~{quote.author}</p>
        </>
      )}
    </div>
  )
}

export default Quotes

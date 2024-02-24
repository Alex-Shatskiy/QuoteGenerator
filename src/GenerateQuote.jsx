import axios from "axios"
import "./generateQuote.css"
function GenerateQuote({ setQuote }) {
  const apiURL = "https://api.quotable.io/random"

  const generateAQuote = async (setQuoteState, url) => {
    await axios
      .get(url)
      .then((response) => {
        return setQuoteState(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="button-container">
      <button role="button" onClick={() => generateAQuote(setQuote, apiURL)}>
        Quote Me!
      </button>
    </div>
  )
}

export default GenerateQuote

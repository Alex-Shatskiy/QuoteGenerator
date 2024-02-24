import { useState } from "react"

import "./App.css"
import Header from "./Header"
import Quotes from "./Quotes"
import GenerateQuote from "./GenerateQuote"

function App() {
  const [quote, setQuote] = useState("")
  return (
    <>
      <div className="mainContainer">
        <Header />
        <Quotes quote={quote} />
        <GenerateQuote setQuote={setQuote} />
      </div>
    </>
  )
}

export default App

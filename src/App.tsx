import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import "./App.css"

function SearchPage() {
  const [query, setQuery] = useState<string>("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query) {
      // Use window.location.href to navigate to an external URL
      window.location.href = `https://en.wiktionary.org/wiki/${query}#German`
    }
  }

  return (
    <div>
      <h1 className="animate-title">Wie bitte?</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-container">
          <input
            type="text"
            placeholder="Schreib ein Wort, Alter!"
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit" className="button-pulsate">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

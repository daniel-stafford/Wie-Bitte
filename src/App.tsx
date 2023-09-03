import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import SearchPage from "./SearchPage"

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

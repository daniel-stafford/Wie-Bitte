import React, { useState } from "react"
import axios from "axios"
import "./App.css"
import Form from "./Form"

function SearchPage() {
  const [germanQuery, setGermanQuery] = useState<string>("")
  const [englishQuery, setEnglishQuery] = useState<string>("")
  const [germanLoading, setGermanLoading] = useState<boolean>(false)
  const [englishLoading, setEnglishLoading] = useState<boolean>(false)

  const myMemoryApiUrl = "https://api.mymemory.translated.net/get"

  const handleGermanInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGermanQuery(e.target.value)
  }

  const handleGermanSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (germanQuery) {
      try {
        setGermanLoading(true)

        // Redirect to the Wiktionary page with the German query
        window.location.href = `https://en.wiktionary.org/wiki/${germanQuery}#German`
        setGermanQuery("")
      } catch (error) {
        console.error("Redirect error:", error)
      } finally {
        setGermanLoading(false)
      }
    }
  }

  const handleEnglishInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnglishQuery(e.target.value)
  }

  const handleEnglishSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (englishQuery) {
      try {
        setEnglishLoading(true)

        const response = await axios.get(
          `${myMemoryApiUrl}?q=${englishQuery}&langpair=en|de`
        )

        if (response.data && response.data.responseData) {
          const translatedText = response.data.responseData.translatedText
          window.location.href = `https://en.wiktionary.org/wiki/${translatedText}#German`
        } else {
          console.error("Translation API request failed.")
        }
      } catch (error) {
        console.error("Translation API request error:", error)
      } finally {
        setEnglishLoading(false)
      }
    }
  }

  return (
    <div>
      <h1 className="animate-title">Wie bitte?</h1>
      <Form
        placeholder="Schreib ein Wort, Alter!"
        value={germanQuery}
        onChange={handleGermanInputChange}
        onSubmit={handleGermanSubmit}
        isLoading={germanLoading}
      />

      <div className="search-container">
        {/* English input field */}
        <Form
          placeholder="Search a word in English"
          value={englishQuery}
          onChange={handleEnglishInputChange}
          onSubmit={handleEnglishSubmit}
          isLoading={englishLoading}
        />
      </div>
    </div>
  )
}

export default SearchPage

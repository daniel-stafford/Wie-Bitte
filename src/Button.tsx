import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons"

interface ButtonProps {
  isLoading: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ isLoading, onClick }) => {
  return (
    <button
      type="submit"
      className={`button-pulsate ${isLoading ? "disabled" : ""}`}
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <FontAwesomeIcon icon={faSpinner} spin />
      ) : (
        <FontAwesomeIcon icon={faSearch} />
      )}
    </button>
  )
}

export default Button

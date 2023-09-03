import React from "react"
import Button from "./Button"

interface FormProps {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
  isLoading: boolean
}

const Form: React.FC<FormProps> = ({
  placeholder,
  value,
  onChange,
  onSubmit,
  isLoading,
}) => {
  return (
    <form onSubmit={onSubmit} className="search-form">
      <div className="search-container">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <Button isLoading={isLoading} />
      </div>
    </form>
  )
}

export default Form

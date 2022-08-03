import { ChangeEvent, FormEvent, useState } from 'react'

interface UseForm<T> {
  inputs: T
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function useForm<T>(
  initial: T,
  onSubmit: (inputs: T) => void
): UseForm<T> {
  const [inputs, setInputs] = useState<T>(initial)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(inputs)
  }

  return {
    inputs,
    handleChange,
    handleSubmit,
  }
}

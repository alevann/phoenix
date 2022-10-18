import {Input} from '@mui/material'
import {ChangeEvent, useState} from 'react'

type WordFieldProps = {
  word: Word
  onCorrect: (word: Word) => void
  resetOnCorrect?: boolean
}

const WordField = ({ word, onCorrect, resetOnCorrect = true }: WordFieldProps): JSX.Element => {
  const [guess, setGuess] = useState('')

  const update = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (value == word.latin) {
      onCorrect(word)
      resetOnCorrect && (value = '')
    }
    setGuess(value)
  }

  return (
    <Input
      value={guess}
      onChange={update}
      disabled={guess == word.latin}
    />
  )
}

export default WordField

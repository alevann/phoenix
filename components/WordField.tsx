import {Input} from '@mui/material'
import {ChangeEvent, CSSProperties, useEffect, useState} from 'react'

type WordFieldProps = {
  word: Word
  onCorrect: (word: Word) => void
  resetOnCorrect?: boolean
  style?: CSSProperties
}

const WordField = ({ word, onCorrect, resetOnCorrect = true, style }: WordFieldProps): JSX.Element => {
  const [guess, setGuess] = useState('')

  // The word may change, in which case the field should reset
  useEffect(() => setGuess(''), [word])

  const update = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (value.toLowerCase() == word.latin.toLowerCase()) {
      onCorrect(word)
      resetOnCorrect && (value = '')
    }
    setGuess(value)
  }

  return (
    <Input
      style={style}
      value={guess}
      onChange={update}
      disabled={guess == word.latin}
    />
  )
}

export default WordField

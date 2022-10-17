import {ChangeEvent, CSSProperties, useState} from 'react'
import {TextField, Typography} from '@mui/material'

type WordGuesserProps = {
  dictionary: Dictionary
}

const randomWord = (dictionary: Dictionary): Word => dictionary[dictionary.length * Math.random() << 0]

function WordGuesser({ dictionary }: WordGuesserProps): JSX.Element {
  const [last, setLast] = useState<Word>({ latin: '', definition: '', phonetic: '' })
  const [word, setWord] = useState<Word>(randomWord(dictionary))
  const [guess, setGuess] = useState('')

  const updateGuess = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (value == word.latin) {
      setLast(word)
      setWord(randomWord(dictionary))
      setGuess('')
    } else {
      setGuess(value)
    }
  }

  const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        gap: '.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem'
      }}
    >

      <div style={style}>

        <Typography variant={'h3'}>
          {last.latin}
        </Typography>

        <Typography variant={'caption'} gutterBottom>
          {last.phonetic}
        </Typography>

        <div style={{ overflowY: 'auto' }}>

          <Typography variant={'body1'}>
            {last.definition}
          </Typography>

        </div>

      </div>

      <div style={style}>

        <Typography variant={'h3'}>
          {word.phonetic}
        </Typography>

        <Typography variant={'caption'} gutterBottom>
          Cheats: {word.latin}
        </Typography>

        <TextField
          variant={'outlined'}
          value={guess}
          onChange={updateGuess}
        />

        <div style={{ overflowY: 'auto' }}>

          <Typography variant={'body1'}>
            {word.definition}
          </Typography>

        </div>

      </div>

    </div>
  )
}

export default WordGuesser

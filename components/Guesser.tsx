import {ChangeEvent, useState} from 'react'
import styled from '@emotion/styled'
import {TextField, Typography} from '@mui/material'

type GuesserProps = {
  dictionary: Dictionary
}

const randomWord = (dictionary: Dictionary): Word => dictionary[dictionary.length * Math.random() << 0]

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  gap: .5rem;
  
  overflow: auto;
  
  @media screen and (max-width: 1080px) {
    flex-wrap: wrap-reverse;
  }
`

const Definition = styled.div`
  overflow-y: auto
`

const Column = styled.div`
  width: 100%;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Guesser = ({ dictionary }: GuesserProps): JSX.Element => {
  const [last, setLast] = useState<Word>({ definition: '', phonetic: '', latin: '' })
  const [word, setWord] = useState<Word>(randomWord(dictionary))
  const [guess, setGuess] = useState('')

  const update = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (value == word.latin) {
      setLast(word)
      setGuess('')
      setWord(randomWord(dictionary))
    } else {
      setGuess(value)
    }
  }

  return (
    <Content>

      <Column>

        <div>
          <Typography variant={'h4'}>
            {last.latin.charAt(0).toUpperCase()}{last.latin.substring(1)}
          </Typography>

          <Typography variant={'subtitle1'} gutterBottom>
            {last.phonetic}
          </Typography>
        </div>

        <Definition>
          <Typography variant={'body1'}>
            {last.definition}
          </Typography>
        </Definition>

      </Column>

      <Column>

        <div>
          <Typography variant={'h4'}>
            {word.phonetic}
          </Typography>

          <Typography variant={'subtitle1'} gutterBottom>
            Cheats: {word.latin}
          </Typography>
        </div>

        <TextField
          variant={'outlined'}
          value={guess}
          onChange={update}
        />

        <Definition>
          <Typography variant={'body1'}>
            {word.definition}
          </Typography>
        </Definition>

      </Column>

    </Content>
  )
}

export default Guesser

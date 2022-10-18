import {useState} from 'react'
import Flex from './Flex'
import StreakBar from './StreakBar'
import WordDisplay from './WordDisplay'
import WordField from './WordField'
import {Button, Typography} from '@mui/material'

const getRandomWord = (d: Dictionary) => d[d.length * Math.random() << 0]

type SingleWordGuesserProps = {
  dictionary: Dictionary
}

const SingleWordGuesser = ({ dictionary }: SingleWordGuesserProps): JSX.Element => {
  const [word, setWord] = useState<Word>(getRandomWord(dictionary))
  const [last, setLast] = useState<Word>({ latin: '', phonetic: '', definition: '' })
  const [streak, setStreak] = useState(0)

  const onCorrectGuess = (w: Word) => {
    setWord(getRandomWord(dictionary))
    setLast(w)
    setStreak(streak + 1)
  }

  const onSkip = () => {
    setStreak(0)
    setLast(word)
    setWord(getRandomWord(dictionary))
  }

  return (
    <Flex
      column
      style={{
        padding: '1rem',
        backgroundColor: '#242424',
        width: '100%',
        height: '100%',
        maxHeight: '100%'
      }}
    >

      <StreakBar
        streak={streak}
      />

      <Flex style={{ height: '100%' }}>

        <WordDisplay
          word={last}
          style={{ width: '50%', padding: '1rem', maxHeight: '100%' }}
        />

        <Flex
          column
          style={{ width: '50%', padding: '1rem' }}
        >

          <Typography variant={'h3'} gutterBottom>
            {word.phonetic}
          </Typography>

          {
            process.env.NODE_ENV !== 'production' && (
              <Typography variant={'subtitle1'}>
                Cheats: {word.latin}
              </Typography>
            )
          }

          <WordField word={word} onCorrect={onCorrectGuess} />

          <Button
            variant={'contained'}
            onClick={onSkip}
            style={{ width: 'fit-content', alignSelf: 'end', marginTop: 'auto' }}
          >
            <strong>Skip</strong>
          </Button>

        </Flex>

      </Flex>

    </Flex>
  )
}

export default SingleWordGuesser

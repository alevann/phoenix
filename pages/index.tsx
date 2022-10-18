import type { NextPage } from 'next'
import useDictionary from '../hooks/useDictionary'
import WordField from '../components/WordField'
import {useEffect, useState} from 'react'
import WordDisplay from '../components/WordDisplay'
import Flex from '../components/Flex'
import StreakBar from '../components/StreakBar'
import {Typography} from '@mui/material'

const Home: NextPage = () => {
  const { dictionary, isLoading } = useDictionary('en')
  const [word, setWord] = useState<Word>({ latin: '', definition: '', phonetic: '' })
  const [streak, setStreak] = useState(0)

  const randomWord = () => dictionary[dictionary.length * Math.random() << 0]
  const onCorrect = () => {
    setWord(randomWord())
    setStreak(s => s + 1)
  }

  useEffect(() => dictionary && setWord(randomWord()), [dictionary])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Flex column style={{ maxWidth: '1600px', padding: '2rem', margin: 'auto', gap: '1rem'}}>

      <StreakBar streak={streak} />

      <Flex style={{ gap: '1rem' }}>

        <WordDisplay word={word} style={{ width: '50%' }} />

        <Flex column>

          <Typography variant={'h5'}>
            {word.phonetic}
          </Typography>

          <WordField
            word={word}
            onCorrect={onCorrect}
          />

        </Flex>

      </Flex>

    </Flex>
  )
}

export default Home

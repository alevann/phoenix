import type { NextPage } from 'next'
import useDictionary from '../hooks/useDictionary'
import WordField from '../components/WordField'
import {useEffect, useState} from 'react'
import WordDisplay from '../components/WordDisplay'
import Flex from '../components/Flex'

const Home: NextPage = () => {
  const { dictionary, isLoading } = useDictionary('en')
  const [word, setWord] = useState<Word>({ latin: '', definition: '', phonetic: '' })

  const randomWord = () => dictionary[dictionary.length * Math.random() << 0]
  const onCorrect = () => setWord(randomWord())

  useEffect(() => dictionary && setWord(randomWord()), [dictionary])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Flex style={{ gap: '2rem' }}>

      <WordDisplay word={word} style={{ width: '50%' }} />

      <WordField
        word={word}
        onCorrect={onCorrect}
      />

    </Flex>
  )
}

export default Home

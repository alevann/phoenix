import type { NextPage } from 'next'
import useDictionary from '../hooks/useDictionary'
import WordField from '../components/WordField'
import {useEffect, useState} from 'react'

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
    <div>
      <WordField
        word={word}
        onCorrect={onCorrect}
      />
      <p>{word.latin}</p>
      <p>{word.phonetic}</p>
    </div>
  )
}

export default Home

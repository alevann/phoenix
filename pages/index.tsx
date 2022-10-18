import type { NextPage } from 'next'
import useDictionary from '../hooks/useDictionary'
import Flex from '../components/Flex'
import SingleWordGuesser from '../components/SingleWordGuesser'

const Home: NextPage = () => {
  const { dictionary, isLoading } = useDictionary('en')

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Flex column style={{ maxWidth: '1600px', padding: '2rem', margin: 'auto', gap: '1rem'}}>

      <SingleWordGuesser dictionary={dictionary} />

    </Flex>
  )
}

export default Home

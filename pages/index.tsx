import type { NextPage } from 'next'
import useDictionary from '../hooks/useDictionary'
import Flex from '../components/Flex'
import SingleWordGuesser from '../components/SingleWordGuesser'
import styled from '@emotion/styled'

const Background = styled.div`
  background-image: linear-gradient(to right, #EB3349, #F45C43, #EB3349);
  background-size: 200% 200%;
  animation: animate-background 25s ease;
  
  height: 100%;
  width: 100%;
  
  @keyframes animate-background {
    from {
      background-position: 200% 200%;
    }
    to {
      background-position: -200% -200%;
    }
  }
`

const Home: NextPage = () => {
  const { dictionary, isLoading } = useDictionary('en')

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Background>
      <Flex column style={{
        width: '100%',
        height: '100%',
        maxWidth: '1600px',
        maxHeight: '900px',
        padding: '2rem',
        margin: 'auto',
        gap: '1rem'
      }}>
        <SingleWordGuesser dictionary={dictionary} />
      </Flex>
    </Background>
  )
}

export default Home

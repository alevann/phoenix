import useDictionary from '../hooks/useDictionary'
import styled from '@emotion/styled'
import SingleWordGuesser from '../components/SingleWordGuesser'

const Background = styled.div`
  background-image: linear-gradient(to right, #EB3349, #F45C43, #EB3349);
  background-size: 200% 200%;
  animation: animate-background 25s ease;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
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

type DecentProps = {}

const Decent = ({}: DecentProps): JSX.Element => {
  const { dictionary, isLoading } = useDictionary('en')

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Background>

      <div
        style={{
          width: '100%',
          height: '100%',
          maxWidth: 'min(1400px, 100%)',
          maxHeight: 'min(100%, 900px)'
        }}
      >
        <SingleWordGuesser
          dictionary={dictionary}
        />
      </div>

    </Background>
  )
}

export default Decent

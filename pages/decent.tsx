import useDictionary from '../hooks/useDictionary'
import styled from '@emotion/styled'
import { Button, Typography } from "@mui/material";
import WordField from "../components/WordField";
import WordDisplay from "../components/WordDisplay";
import { useState } from "react";

const Background = styled.div`
  background-image: linear-gradient(to right, #EB3349, #F45C43, #EB3349);
  background-size: 200% 200%;
  animation: animate-background 25s ease;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  overflow: hidden;
  
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

const Container = styled.div`
  background-color: #242424;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 1rem;
  gap: 1rem;

  height: 100%;
  width: 100%;
  max-height: min(900px, 100%);
  max-width: min(1400px, 100%);
  
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    
    max-height: 100%;
    max-width: 100%;
  }
  
  & > * {
    height: 100%;
    width: 100%;

    overflow: auto;
  }
`

const getRandomWord = (d: Dictionary) => d[d.length * Math.random() << 0]

type DecentProps = {}

const Decent = ({}: DecentProps): JSX.Element => {
  const { dictionary, isLoading } = useDictionary('en')

  const [word, setWord] = useState<Word>(getRandomWord(dictionary))
  const [last, setLast] = useState<Word>({ latin: '', phonetic: '', definition: '' })

  const onCorrectGuess = (w: Word) => {
    setWord(getRandomWord(dictionary))
    setLast(w)
  }

  const onSkip = () => {
    setLast(word)
    setWord(getRandomWord(dictionary))
  }

  // sneaky eheheh
  (window as any).cheats = (): any => ({ latin: word.latin, phonetic: word.phonetic })

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Background>

      <Container>

        <div>
          <WordDisplay
            word={last}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
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

          <WordField
            word={word}
            onCorrect={onCorrectGuess}
          />

          <Button
            variant={'contained'}
            onClick={onSkip}
            style={{ width: 'fit-content', alignSelf: 'end', marginTop: 'auto' }}
          >
            <strong>Skip</strong>
          </Button>
        </div>

      </Container>

    </Background>
  )
}

export default Decent

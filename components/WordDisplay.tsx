import Flex from './Flex'
import {Typography} from '@mui/material'
import {CSSProperties} from 'react'

type WordDisplayProps = {
  style?: CSSProperties
  word: Word
}

const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.substring(1)

const WordDisplay = ({ style, word }: WordDisplayProps): JSX.Element => {
  return (
    <Flex style={style} column reverse={false}>

      <Typography variant={'h3'} noWrap>
        {capitalize(word.latin)}
      </Typography>

      <Typography variant={'subtitle1'} noWrap gutterBottom>
        {word.phonetic}
      </Typography>

      <Typography variant={'body1'} align={'justify'}>
        {capitalize(word.definition)}
      </Typography>

    </Flex>
  )
}

export default WordDisplay

import Flex from './Flex'
import {Typography} from '@mui/material'
import styled from '@emotion/styled'
import {Property} from 'csstype'

const levels: Property.BackgroundImage[] = [
  'linear-gradient(to right, #EB3349, #F45C43, #EB3349)',
  'linear-gradient(to right, #DD5E89, #F7BB97, #DD5E89)',
]

type ProgressBarProps = {
  progress: number,
  level: number
}

const ProgressBar = styled.div<ProgressBarProps>`
  border-radius: 10px;
  width: 100%;
  background-image: ${({level}) => levels[level % levels.length]};
  position: relative;
  overflow: hidden;
  margin-left: auto;
  height: 100%;

  ::after {
    content: '';
    background-image: ${({level}) => levels[(level + 1) % levels.length]};
    background-size: 200%;
    width: calc(100% * ${({progress}) => (progress / 9)});
    position: absolute;
    top: 0;
    left: -20px;
    bottom: 0;
    transform: skew(-20deg);
    transition: width ease 2s;
    animation: move-background 12s ease-in-out infinite;

    @keyframes move-background {
      from {
        background-position: 200% 200%;
      }
      to {
        background-position: -200% -200%;
      }
    }
  }
`

type StreakBarProps = {
  streak: number
}

const StreakBar = ({ streak = 0 }: StreakBarProps): JSX.Element => {
  return (
    <Flex style={{ height: 'fit-content', position: 'relative', padding: '0.15rem' }}>

      <Typography variant={'h5'} style={{ zIndex: 1, marginLeft: '1.5rem' }}>
        Streak: <strong>{streak}</strong>
      </Typography>

      <div
        style={{
          position: 'absolute',
          inset: 0
        }}
      >

        <ProgressBar progress={streak % 10} level={Math.floor(streak / 10)}/>

      </div>

    </Flex>
  )
}

export default StreakBar

import Logo from '../components/phoenix-logo.png'
import React from 'react'
import styled from '@emotion/styled'
import Guesser from '../components/Guesser'
import useDictionary from '../hooks/useDictionary'
import {Typography} from '@mui/material'

const TopBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        position: 'sticky',
        height: '64px',
        padding: '.5rem 1rem'
      }}
    >
      <img src={Logo.src} />
    </div>
  )
}

const Center = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {children}
    </div>
  )
}

const Streak = ({ count }: { count: number }) => {
  return (
    <Typography>
      Streak: {count}
    </Typography>
  )
}

const ex = (): JSX.Element => {
  const { dictionary } = useDictionary('en')

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <Streak />
      <Center>
        {
          dictionary && <Guesser dictionary={dictionary}/>
        }
      </Center>
    </div>
  )
}

export default ex

import SvgThing from './index.svg'
import React from 'react'
import styled from '@emotion/styled'

const Content = styled.div`
  width: 100%;
  height: 100%;
  
  max-width: 1200px;
  max-height: 800px;
  
  background: center / cover no-repeat url(${SvgThing.src});
  border-radius: 5px;
  
  color: white;
`

export default Content

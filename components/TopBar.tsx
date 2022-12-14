import styled from '@emotion/styled'
import Logo from './Logo'

const Container = styled.div`  
  padding: 1rem;
  display: flex;
  flex-direction: row;
`

type TopBarProps = {}

const TopBar = ({}: TopBarProps): JSX.Element => {
  return (
    <Container>
      <Logo />
    </Container>
  )
}

export default TopBar

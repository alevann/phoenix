import styled from '@emotion/styled'

const Container = styled.div`
  font-family: "Courier New", monospace;
  font-weight: 800;
  font-size: 21px;
  letter-spacing: .15em;
  
  width: fit-content;
  
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`

const Animate = styled.div`
  animation: typing 1.5s steps(10);

  @keyframes typing {
    from {
      clip-path: inset(0 100% 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }
`

const Logo = () => {
  return (
    <Container>
      <Animate>
        <p>/ˈfiːnɪks/</p>
      </Animate>
    </Container>
  )
}

export default Logo

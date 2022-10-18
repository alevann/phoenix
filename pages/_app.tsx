import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import Head from 'next/head'
import TopBar from '../components/TopBar'
import Flex from '../components/Flex'

const client = new QueryClient()
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#EB3349'
    }
  }
})

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>

        <Head>
          <title>/ˈfiːnɪks/</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <CssBaseline enableColorScheme />

        <Flex column style={{ width: '100vw', height: '100vh' }}>

          <TopBar />
          <Component {...pageProps} />

        </Flex>

      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App

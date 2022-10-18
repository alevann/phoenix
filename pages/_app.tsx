import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import Logo from '../components/Logo'
import Head from 'next/head'

const client = new QueryClient()
const theme = createTheme({
  palette: {
    mode: 'dark'
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

        <Logo />
        <Component {...pageProps} />

      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App

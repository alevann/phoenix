import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import Head from 'next/head'
import TopBar from '../components/TopBar'

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

        <TopBar />
        <Component {...pageProps} />

      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App

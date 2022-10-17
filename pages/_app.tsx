import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material'

const client = new QueryClient()
const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>

        <CssBaseline enableColorScheme />
        <Component {...pageProps} />

      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp

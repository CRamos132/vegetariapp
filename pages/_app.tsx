import { createGlobalStyle, ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }
`

const theme = {
  colors: {
    background: "#205e3b",
    text: "#FFFFFF",
    primary: "#e1e1e6",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { Dosis } from 'next/font/google'
import Head from 'next/head'

const h2Font = Dosis({ preload: false })

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta httpEquiv="Cache-Control" content="no-cache" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
      {process.env.NODE_ENV !== 'development' && (
        <link
          rel="stylesheet"
          href="https://ss159178.stars.ne.jp/css/normalize.css?1348127897942"
        />
      )}

      <title>{`Ryota Sasaki's Portfolio Ver. 1`}</title>
      <meta name="description" content="Ryota SasakiのPortfolio Ver. 1" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)
export default App

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      'Avenir',
      'Open Sans',
      'Helvetica Neue',
      'Helvetica',
      'Arial',
      'Verdana',
      'Roboto',
      '游ゴシック',
      'Yu Gothic',
      '游ゴシック体',
      'YuGothic',
      'ヒラギノ角ゴ Pro W3',
      'Hiragino Kaku Gothic Pro',
      'Meiryo UI',
      'メイリオ',
      'Meiryo',
      'ＭＳ Ｐゴシック',
      'MS PGothic',
      'sans-serif',
    ].join(','),
    h2: {
      fontWeight: 700,
      borderBottom: '3px solid #000',
      padding: 3,
      marginBottom: 40,
      fontSize: '2.8rem',
      color: '#000',
      fontFamily: h2Font.style.fontFamily,
      letterSpacing: 2,
    },
    h3: {
      fontWeight: 700,
      borderBottom: '3px solid #000',
      padding: 3,
      marginBottom: 40,
      fontSize: '2.8rem',
      color: '#000',
      fontFamily: h2Font.style.fontFamily,
      letterSpacing: 2,
    },
  },
  palette: {
    background: {
      default: '#fff',
    },
    primary: {
      main: '#f7912b',
    },
    secondary: {
      main: '#2AC7F7',
    },
    text: {
      primary: '#333',
    },
  },
})

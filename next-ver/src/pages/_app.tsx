import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Cache-Control" content="no-cache" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
      <link rel="stylesheet" href="https://ss159178.stars.ne.jp/css/normalize.css?1348127897942" />

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
  },
  palette: {
    background: {
      default: '#fff',
    },
    text: {
      primary: '#333',
    },
  },
})

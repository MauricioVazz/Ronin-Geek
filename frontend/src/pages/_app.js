import '../styles/globals.css'  // importa o CSS global

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />  // JSX aqui é permitido
}

export default MyApp
import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import Header from '../components/header';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
    </Head>
    <Header/>
  <Component {...pageProps} />
  </>);
}

export default MyApp

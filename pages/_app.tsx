import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import Header from '../components/header';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"
import { getServerSession } from 'next-auth/next';
import AuthGuard from '../components/auth-guard';

const MyApp = ({ Component, pageProps: {session, ...pageProps} }: AppProps) => {
  console.log(session);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <SessionProvider session={session}>
        
      <AuthGuard>
        <Header/>
        <Component {...pageProps} />
      </AuthGuard>
    </SessionProvider>
    </>
    
  );
}

export const getServerSideProps = async (ctx: any) => {
  const session = await getServerSession(ctx);
  return {
 props:{
  session: session
   }
  }
 }

export default MyApp

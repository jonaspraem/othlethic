import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Authenticator from '../components/authenticator'

const Home: NextPage = () => {
  return (
    <div>
      <Authenticator />
    </div>
  )
}

export default Home;

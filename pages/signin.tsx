import type { InferGetServerSidePropsType, NextPage } from 'next'
import Authenticator from '../components/authenticator';
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from 'next-auth';
import { authOptions } from "./api/auth/[...nextauth]";

const Home: NextPage = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
      <Authenticator />
    )
  }

  export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);
    
    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    /*if (session) {
      return { redirect: { destination: "/" } };
    }*/
  
    const providers = await getProviders();
    
    return {
      props: { providers: providers ?? [] },
    }
  }
  
  export default Home;
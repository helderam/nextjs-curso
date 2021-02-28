import Head from 'next/head'
import Navigation from '@components/Navigation';

import Header from '@components/Header';



export default function Home() {
  return (
    <>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <Header />
      </main>

    </>
  );
}

import Head from 'next/head'

import Header from '@components/Header';

export default function Home() {
  return (
    <>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>

    </>
  );
}

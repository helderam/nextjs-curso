
import Head from 'next/head'
import Navigation from '@components/Navigation';
import Header from '@components/Header';

import { InferGetServerSidePropsType } from 'next';
import { getPostList } from '@shared/util';

import Link from 'next/link';

type PostList = string[];

function Home({ posts }: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <Header />
        {posts.length > 0 && (
          <ul>
            {posts.map((slug) => (
              <li key={slug}>
                <Link href={`posts/${slug}`}>
                  <a>
                    {slug.replace(/-/g, ' ')}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

    </>
  );
}

export const getStaticProps = async () => {
  const posts: PostList = getPostList()
  return {
    props: {
      posts
    }
  }
}

export default Home;
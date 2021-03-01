import Image from 'next/image';
import Head from 'next/head';


const Hello = () =>(
    <>
    <Head>
        <title> Ola</title>
        <meta property="og:title" content="Olá" />
    </Head>
    <article>
        <h1> Olá tudo bem ?</h1>
        <Image
        src="/posts/hello-there/opencart.jpeg"
        width={640}
        height={427}
        />
    </article>
    </>
)
export default Hello
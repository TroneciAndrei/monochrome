import Head from 'next/head'
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header></Header>

    <Main></Main>

    <Footer></Footer>
    </div>
  )
}

import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Healthy Recipes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
      <Footer />
    </>
  );
}

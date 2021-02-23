import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Healthy Recipes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

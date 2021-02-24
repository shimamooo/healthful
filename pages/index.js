import Image from 'next/image';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default function Home() {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((response) => response.json())
      .then((data) => setContent(data.response));
  }, []);

  return (
    <Layout>
      <main className='h-screen'>
        <Image
          src='/food.png'
          alt='Food hero image'
          layout='fill'
          objectFit='cover'
          quality={100}
          className='-z-10 backdrop-filter'
        />
        <Navbar />
        <div className='absolute bottom-10'>
          <h1 className='font-serif text-white text-5xl'>Healthful Recipes</h1>
          <p>
            Find healthy recipes using the ingredients you have at hand. Powered
            by machine learning
          </p>
        </div>
      </main>
    </Layout>
  );
}

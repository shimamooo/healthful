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
        <div className='absolute bottom-12 left-24'>
          <h1 className='font-serif text-gray-50 text-4xl leading-tight'>
            <span className='block'>Find the recipe for you,</span>
            <span className='block'>powered by machine learning.</span>
          </h1>
          <a
            href='#'
            className='inline-block mt-8 text-gray-300 font-bold text-sm'
          >
            See how
          </a>
        </div>
      </main>
    </Layout>
  );
}

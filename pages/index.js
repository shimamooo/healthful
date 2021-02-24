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
          className='-z-10'
        />
        <Navbar />
        <div className='absolute bottom-8 flex w-full items-end px-12'>
          <a
            href='/contributors'
            className='flex-1 mb-4 font-bold text-gray-400'
          >
            See the contributors
          </a>
          <div className='flex-1'>
            <h1 className='font-serif text-white text-4xl leading-tight'>
              <span className='block'>Curated Recipes,</span>
              <span className='block'>Using Machine Learning</span>
            </h1>
            <a href='#' className='inline-block mt-8 font-bold text-gray-400'>
              See how
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}

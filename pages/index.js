import Image from 'next/image';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';

export default function Home() {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((response) => response.json())
      .then((data) => setContent(data.response));
  }, []);

  return (
    <Layout>
      <div className='fixed bg-gray-50 w-128 h-128 top-1/2 left-1/2 transform translate-x-1/3 -translate-y-2/3 rounded-full -z-20'></div>
      <div className='fixed bg-gray-50 w-96 h-96 top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-2/3 rounded-full -z-20'></div>

      <Menu />

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
        <div className='absolute bottom-12 flex w-full items-end px-12'>
          <div className='flex-1'>
            <h1 className='font-serif text-white text-4xl leading-tight'>
              <span className='block'>Curated Recipes,</span>
              <span className='block'>Using Machine Learning</span>
            </h1>
            <a
              href='#showcase'
              className='inline-block mt-8 font-bold text-gray-400'
            >
              See how
            </a>
          </div>
          <a href='/contributors' className='flex-1 font-medium text-gray-400'>
            Meet the team
          </a>
        </div>
      </main>

      <section className='pt-64 container-homepage mx-auto px-6' id='showcase'>
        <h2 className='font-serif text-gray-800 text-3xl'>
          Take "boring" and "unhealthy" out of your meals
        </h2>
        <h2 className='font-serif text-gray-800 text-3xl'>
          Only the best recipes for your available ingredients
        </h2>
        <h2 className='font-serif text-gray-800 text-3xl'>
          Powered by advanced machine learning algorithms
        </h2>
        <div className='h-screen'></div>
      </section>
    </Layout>
  );
}

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((response) => response.json())
      .then((data) => setContent(data.response));
  }, []);

  return (
    <Layout>
      <main className='container mx-auto flex'>
        <div>
          <h1 className='font-serif'>Healthy Recipes</h1>
          <p>
            Find healthy recipes using the ingredients you have at hand. Powered
            by machine learning.
          </p>
          <a href='#demo'>Get Started</a>
        </div>
        <Image
          src='/food.png'
          alt='Food hero image'
          width={3000}
          height={2500}
        />
      </main>

      <section></section>
    </Layout>
  );
}

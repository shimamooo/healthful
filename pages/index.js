import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((response) => response.json())
      .then((data) => setContent(data.response));
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>{content}</h1>
    </div>
  );
}

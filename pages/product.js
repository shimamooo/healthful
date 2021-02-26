import { useState, useEffect } from 'react';

export default function Product() {
  const [content, setContent] = useState();

  useEffect(() => {
    const fileInput = document.querySelector('.FILE-INPUT');
    const textInput = document.querySelector('.TEXT-INPUT');
    const submitButton = document.querySelector('.SUBMIT-BUTTON');

    fileInput.addEventListener('change', () => {
      let message = {
        name: 'nice',
      };
      fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
      textInput.value = 'nice';
    });

    submitButton.addEventListener('click', () => {
      let message = {
        name: textInput.value.toLowerCase(),
      };
      fetch('http://localhost:5000/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    });
  }, []);

  return (
    <main>
      <label htmlFor='ml-food'>Upload an image</label>
      <input type='file' id='ml-food' className='FILE-INPUT' />
      <label htmlFor='food'>Or choose a fruit/vegetable</label>
      <input type='text' id='food' className='TEXT-INPUT' />
      <button className='SUBMIT-BUTTON'>Submit</button>
      <p className='TEXT-CONTENT'>{content}</p>
    </main>
  );
}

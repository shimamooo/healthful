import { useState, useEffect } from 'react';

export default function Product() {
  const [content, setContent] = useState();

  useEffect(() => {
    const textInput = document.querySelector('.TEXT-INPUT');
    const submitButton = document.querySelector('.SUBMIT-BUTTON');

    submitButton.addEventListener('click', () => {
      let message = {
        name: textInput.value,
      };
      fetch('http://localhost:5000/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      })
        .then((response) => response.json())
        .then((data) => setContent(data.greeting))
        .catch((error) => console.log(error));
    });
  }, []);

  return (
    <main>
      <input type='text' className='TEXT-INPUT' />
      <button className='SUBMIT-BUTTON'>Submit</button>
      <p className='TEXT-CONTENT'>{content}</p>
    </main>
  );
}

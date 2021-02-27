import { useEffect } from 'react';

export default function Product() {
  useEffect(() => {
    // const fileInput = document.querySelector('.FILE-INPUT');
    // const selectedImage = document.querySelector('.SELECTED-IMAGE');
    // const predictButton = document.querySelector('.PREDICT-BUTTON');
    // const dogPrediction = document.querySelector('.DOG-PREDICTION');
    // const catPrediction = document.querySelector('.CAT-PREDICTION');
    // let base64Image;

    // fileInput.addEventListener('change', () => {
    //   let reader = new FileReader();
    //   console.log(reader);
    //   reader.onload = () => {
    //     let dataURL = reader.result;
    //     console.log(dataURL);
    //   };
    // });

    // const textInput = document.querySelector('.TEXT-INPUT');
    // const submitButton = document.querySelector('.SUBMIT-BUTTON');

    console.log('Im gay');

    // submitButton.addEventListener('click', () => {
    //   let message = {
    //     name: textInput.value.toLowerCase(),
    //   };
    //   fetch('/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(message),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    //     .catch((error) => console.log(error));
    // });
  }, []);

  return (
    <main>
      <label htmlFor='ml-food'>Upload an image</label>
      <input type='file' id='ml-food' className='FILE-INPUT' />
      <img src='' className='SELECTED-IMAGE' />
      <button className='PREDICT-BUTTON'>Predict</button>
      <div>
        <h2>Predictions</h2>
        <p>
          Dog: <span className='DOG-PREDICTION'></span>
        </p>
        <p>
          Cat: <span className='CAT-PREDICTION'></span>
        </p>
      </div>

      <label htmlFor='food' className='block mt-96'>
        Or choose a fruit/vegetable
      </label>
      <input type='text' id='food' className='TEXT-INPUT' />
      <button className='SUBMIT-BUTTON'>Submit</button>
      <p className='TEXT-CONTENT'>CONTENT-STATE</p>
    </main>
  );
}

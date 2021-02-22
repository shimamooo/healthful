const nameInput = document.querySelector('#name-input');
const nameButton = document.querySelector('#name-button');
const greeting = document.querySelector('#greeting');

nameButton.addEventListener('click', () => {
  let message = {
    name: 'my dick is throbbing',
  };
  // fetch('http://127.0.0.1:5000/hello', {
  //   headers: { 'content-type': '' },
  //   body: JSON.stringify(message),
  //   method: 'POST',
  // })
  //   .then((res) => console.log(res))
  //   .catch((error) => console.log(error));
  fetch('http://127.0.0.1:5000/hello', {
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

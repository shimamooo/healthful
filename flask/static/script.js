const nameInput = document.querySelector('#name-input');
const nameButton = document.querySelector('#name-button');
const greeting = document.querySelector('#greeting');

nameButton.addEventListener('click', () => {
  let message = {
    name: nameInput.value,
  };
  fetch('http://127.0.0.1:5000/hello', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  })
    .then((response) => response.json())
    .then((data) => {
      greeting.textContent = data.greeting;
    })
    .catch((error) => console.log(error));
});

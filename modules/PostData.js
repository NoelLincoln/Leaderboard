import RenderScores from './RenderScores.js';

async function postData(data) {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VzFi3Cf0XSvs5uhTS0qQ/scores/';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // eslint-disable-next-line no-console
      console.error('Network response was not ok');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

const form = document.getElementById('add-scores-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');

  const data = {
    user: nameInput.value,
    score: scoreInput.value,
  };

  form.reset();
  await postData(data);
  RenderScores();
});
export default postData;

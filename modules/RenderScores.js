async function RenderScores() {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VzFi3Cf0XSvs5uhTS0qQ/scores';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const scoresdata = await response.json();

    const listContainer = document.getElementById('scores-list');
    listContainer.innerHTML = '';

    if (Array.isArray(scoresdata.result) && scoresdata.result.length > 0) {
      scoresdata.result.forEach((score, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('id', index);

        const name = document.createElement('p');
        name.textContent = `Name: ${score.user}`;

        const scoreValue = document.createElement('p');
        scoreValue.textContent = `Score: ${score.score}`;

        listItem.appendChild(name);
        listItem.appendChild(scoreValue);

        listContainer.appendChild(listItem);
      });
    } else {
      const noScoresMessage = document.createElement('p');
      noScoresMessage.textContent = 'No scores available.';
      listContainer.appendChild(noScoresMessage);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    throw new Error('Network response was not ok', error);
  }
}

export default RenderScores;

const scoresdata = [
  {
    name: 'Noel Bryant',
    score: '80%',
    id: '1',
  },
  {
    name: 'Brian Levis',
    score: '85%',
    id: '2',
  },
  {
    name: 'Grace King',
    score: '60%',
    id: '3',
  },
  {
    name: 'Beverly Russo',
    score: '90%',
    id: '4',
  },
];

const RenderScores = () => {
  const listContainer = document.getElementById('scores-list');

  scoresdata.forEach((item) => {
    const scores = document.createElement('li');

    const name = document.createElement('p');
    name.textContent = `${item.name} :`;
    const score = document.createElement('p');
    score.textContent = item.score;

    scores.appendChild(name);

    scores.appendChild(score);

    listContainer.appendChild(scores);
  });
};
export default RenderScores;

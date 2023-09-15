import RenderScores from '../modules/RenderScores.js';
import postData from '../modules/PostData.js';
import './style.css';

const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', RenderScores);

postData();

document.addEventListener('DOMContentLoaded', () => {
  RenderScores();
});

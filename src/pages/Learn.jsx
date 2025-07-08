import { Menu } from 'lucide-react';
import { useState } from 'react';

const spanishWords = [
  'casa',
  'perro',
  'gato',
  'amor',
  'feliz',
  'vida',
  'tiempo',
  'día',
  'noche',
  'sol',
  'luna',
  'agua',
  'comida',
  // Add more words as needed
];

function Learn() {
  const [currentWord, setCurrentWord] = useState('');
  const [loading, setLoading] = useState(false);

  const getRandomWord = () => {
    setLoading(true);
    const randomIndex = Math.floor(Math.random() * spanishWords.length);
    const word = spanishWords[randomIndex];
    setCurrentWord(word);
    setLoading(false);
  };

  return (
    <>
      <div className="navbar">
        <h1>Palabrify</h1>
        <Menu size={48} />
      </div>
      <div className="container">
        <div className="learn-page">
          <div className="controls-container">
            <div className="game-container">
              <label htmlFor="gameSelect">Game:</label>
              <select id="gameSelect">
                <option value="learning">Learning</option>
                <option value="proverb">Proverb</option>
              </select>
            </div>

            <div className="category-container">
              <label htmlFor="categorySelect">Category:</label>
              <select id="categorySelect">
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="hard">Hard</option>
                <select />
              </select>
            </div>

            <button
              className="button-container"
              onClick={getRandomWord}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'New Word'}
            </button>
          </div>

          <div className="result-container">
            <h1>{currentWord}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Learn;

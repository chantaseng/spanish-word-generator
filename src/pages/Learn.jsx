import { Menu } from 'lucide-react';

function Learn() {
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

            <button className="button-container">New Word</button>
          </div>

          <div className="result-container">
            <h1>Palabra</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Learn;

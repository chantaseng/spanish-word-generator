import React from 'react';
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate('/learn');
  };
  return (
    <>
      <div className="container">
        <div className="main">
          <h1>Palabrify</h1>
          <p>
            Welcome to the place where you can learn new Spanish words everyday
          </p>

          <button onClick={handleStartLearning}>Start Learning</button>
        </div>
      </div>
    </>
  );
}

export default Home;

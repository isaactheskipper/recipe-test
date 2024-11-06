import React from 'react';

function DifficultyFilter({ setDifficulty }) {
  return (
    <div>
      <label htmlFor="difficulty">Filter by difficulty:</label>
      <select id="difficulty" onChange={(e) => setDifficulty(e.target.value)}>
        <option value="">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  );
}

export default DifficultyFilter;

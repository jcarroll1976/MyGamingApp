import React, { useState, useEffect } from 'react';
import { fetchGamesByMonth } from '../services/GameApiService';
import { ReleaseResponse } from '../models/GameResponse';
import "./GameRelease.css"
import { Link } from 'react-router-dom';


function GameList() {
  const [games, setGames] = useState<ReleaseResponse>();
  const [selectedMonth, setSelectedMonth] = useState<number>(1); // Default to January

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    let startDate: string;
    let endDate: string;

    if (selectedMonth === 12) {
      startDate = `${currentYear}-12-01`;
      endDate = `${currentYear}-12-31`;
    } else {
      const nextMonth = (selectedMonth % 12) + 1;
      const nextYear = currentYear + Math.floor((selectedMonth - 1) / 12);
      startDate = `${currentYear}-${selectedMonth.toString().padStart(2, '0')}-01`;
      endDate = `${nextYear}-${nextMonth.toString().padStart(2, '0')}-01`;
    }

    fetchGamesByMonth(startDate,endDate).then(data => {
        setGames(data)
    })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [selectedMonth]);

  return (
    <div>
      <h2>Games Released in Specific Months</h2>

      <select value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
        {/*Options for all 12 months */}
        <option value={1}>January</option>
        <option value={2}>February</option>
        <option value={3}>March</option>
        <option value={4}>April</option>
        <option value={5}>May</option>
        <option value={6}>June</option>
        <option value={7}>July</option>
        <option value={8}>August</option>
        <option value={9}>September</option>
        <option value={10}>October</option>
        <option value={11}>November</option>
        <option value={12}>December</option>
        
      </select>
      <div>
      <ul className='release-results'>
        {games?.results.map((game) => (
          <li key={game.id}><p><Link to = {`/game/${game.slug}`}>{game.name}</Link></p><div>{game.background_image ? <img className='release-image' src={game.background_image} alt='No BackgroundImage Available'/>: <p>No Background Image Available</p>}</div></li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default GameList;

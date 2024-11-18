'use client'
import { useState } from 'react';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    alert((walk? "Parar es lo siguiente":"Caminar es lo siguiente"));
    setWalk(!walk);
  }

  return (
    <>
      <button onClick={handleClick}>
        Cambia a {walk ? 'Parar' : 'Caminar'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Caminar' : 'Parar'}
      </h1>
    </>
  );
}

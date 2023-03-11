import * as React from 'react';

import Card from './../../components/Card';
import 'Home.style.css';

const Home = () => {
  const [charactersList, setCharactersList] = React.useState([]);

  React.useEffect(() => {
    const list = fetch('https://rickandmortyapi.com/api/character/?page=1')
      .then((response) => response.json)
      .then((data) => setCharactersList(data.results))
      .catch(console.error);
  }, []);
  return (
    <main>
      <ul>
        {charactersList.map((character) => (
          <li key={character.id}>
            <Card character={charactersList} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;

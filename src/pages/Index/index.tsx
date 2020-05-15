import React, { useEffect, useState } from 'react';
import css from './index.module.scss';

export const HomePage = () => {
  const [todo, setTodo] = useState<any>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/13')
      .then((response) => response.json())
      .then(setTodo);
  }, []);

  return (
    <main className={css.container}>
      <section className={css.profile}>
        <h2>Name Surname</h2>
        <p>Profesionall $</p>
      </section>

      <section className={css.connection_profiles}>
        <ul className={css.profiles}>
          <li className={css.profile}></li>
        </ul>
      </section>
    </main>
  );
};

export default HomePage;

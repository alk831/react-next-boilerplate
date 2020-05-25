import React, { useState } from 'react';
import css from './index.module.scss';

export const IndexPage = () => {
  const [counter, setCounter] = useState(0);

  return (
    <main className={css.container}>
      You have pressed button {counter} times
      <button onClick={() => setCounter(c => c + 1)}>
        Click to increment
      </button>
    </main>
  );
};

export default IndexPage;

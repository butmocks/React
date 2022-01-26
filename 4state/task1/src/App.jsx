import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={-50} interval={3000} />
      <Counter start={200} interval={5000} />
    </>
  );
};
export default App;

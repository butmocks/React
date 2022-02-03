import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
<<<<<<< HEAD
import TransactionsList from './TransactionsList';

const rootElement = document.querySelector('#root');

const transactions = [
  {
    id: 'id-0',
    from: 'USD',
    to: 'EUR',
    amount: 1200,
    rate: 0.8,
    time: '2019-01-10T17:08:35.447Z',
  },
  {
    id: 'id-1',
    from: 'USD',
    to: 'UAH',
    amount: 100000,
    rate: 25.7,
    time: '2019-01-10T18:22:35.447Z',
  },
  {
    id: 'id-2',
    from: 'EUR',
    to: 'USD',
    amount: 100,
    rate: 1.1,
    time: '2019-01-10T17:01:35.447Z',
  },
];

ReactDOM.render(<TransactionsList transactions={transactions} />, rootElement);
=======
import NumbersList from './NumbersList';

const rootElement = document.querySelector('#root');

const numbers = [1, 2, 3, 4, 5];

// const numberElems = numbers.map(num => <li>{num}</li>);

// const element = <ul>{numberElems}</ul>;

ReactDOM.render(<NumbersList numbers={numbers} />, rootElement);
>>>>>>> 5cf77877e4b76c4185e690c1a3442c8383590f2f

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';import FirstExercice from './Exercices/FirstExercice';
import SecondExercice from './Exercices/SecondExercice';
import reportWebVitals from './reportWebVitals';
import ThirdExercice from './Exercices/ThirdExercice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ThirdExercice  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SixthExercice  from "../src/Exercices/SixthExercice";
import FifthExercice  from "../src/Exercices/FifthExercice";
import FourthExercice from "../src/Exercices/FourthExercice";
import ThirdExercice  from "../src/Exercices/ThirdExercice";
import SecondExercice from "../src/Exercices/SecondExercice";
import FirstExercice  from "../src/Exercices/FirstExercice";

import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBarComponent from './components/NavBarComponent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>caralho</p>,
  },
  
  {
    path: "/FirstExercice",
    element: <FirstExercice />,
  },
  
  {
    path: "/SecondExercice",
    element: <SecondExercice />,
  },

  {
    path: "/ThirdExercice",
    element: <ThirdExercice />,
  },

  {
    path: "/FourthExercice",
    element: <FourthExercice />,
  },

  {
    path: "/FifthExercice",
    element: <FifthExercice />,
  },

  {
    path: "/SixthExercice",
    element: <SixthExercice />,
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBarComponent />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

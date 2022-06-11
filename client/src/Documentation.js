import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to="/">Go back home</Link>
      <br />
      Usługa jest zmodyfikowaną wersją przykładu z lab 11. Zmodyfikowane zostały:
      <br />
      <ul>
        <li>funkcja fib w części worker zmieniona na funkcję gs obliczającą wartości dla ciągu geometrycznego</li>
        <li>w części client fib.js zmienionw na gs.js i zmieniona treść </li>
        <li>zmieniona treść strony głównej (App.js)</li>
        <li>zaaktualizowana strona Documentation</li>
        <li></li>
      </ul>
    </div>
  );
};

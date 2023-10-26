import * as React from 'react';
import './header.scss';
import { ReactComponent as Icon } from '../../assets/icons/doodles-icon.svg';

function Hero() {
  return (
    <main className="header">
      <ul>
        <li><Icon /></li>
        <li><a href="/"><p>official</p></a></li>
        <li><a href="/"><p>inventore</p></a></li>
        <li><a href="/"><p>consectetur</p></a></li>
      </ul>
      <div>
        <button>contact</button>
      </div>
    </main>
  );
}

export default Hero;

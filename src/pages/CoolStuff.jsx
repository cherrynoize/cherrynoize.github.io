import React from 'react';
import Pen from '../components/Pen.jsx';
import { SN1, SN2, SN3 } from './SpaceshipButtons/Nav.jsx';
import './playground.css';

export default function CoolStuff() {
  return (
    <section id="cool-shit">
      <Pen id="spaceship-buttons" title="Spaceship buttons">
        <SN1 />
        <SN2 />
        <SN3 />
      </Pen>
    </section>
  );
}

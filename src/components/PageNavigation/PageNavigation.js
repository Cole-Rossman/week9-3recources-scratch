import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PageNavigation() {
  return (
    <div className='page-navigation'>
      <div className='home-nav'>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='bunnies-nav'>
        <ul>
          <li>
            <NavLink exact to="/bunnies">
              Bunnies
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='characters-nav'>
        <ul>
          <li>
            <NavLink exact to="/characters">
              Characters
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='workshops-nav'>
        <ul>
          <li>
            <NavLink exact to="/workshops">
              Workshops
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

import React from 'react';
import logo from '../assets/icons/logo.png';
import { colors } from '../assets/colors';

function NavBar() {
  const navItemColorChange = `hover:text-primary hover:cursor-pointer`;
  return (
    <nav>
      <div className="flex justify-between items-center mt-6">
        <img
          src={logo}
          alt="Logo"
          className="w-[90px] ml-[12%] sm:ml-[2.5rem] md:ml-[3rem]"
        />
        <ul className="flex gap-[1rem] mr-[15%] sm:hidden md:hidden">
          <li
            className={navItemColorChange}
            onClick={() => console.log('clicked')}>
            _about()
          </li>
          <li
            className={navItemColorChange}
            onClick={() => console.log('clicked')}>
            _resume()
          </li>
          <li
            className={navItemColorChange}
            onClick={() => console.log('clicked')}>
            _projects()
          </li>
          <li
            className={navItemColorChange}
            onClick={() => console.log('clicked')}>
            _contact()
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

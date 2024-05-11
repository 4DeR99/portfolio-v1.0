import React from 'react';
import logo from 'assets/icons/logo.png';
import useScrollTo from 'hooks/useScrollTo';
import { navItems } from 'assets/consts';

function NavBar() {
  const { scrollTo } = useScrollTo();
  const navItemColorChange = `hover:text-primary hover:cursor-pointer`;
  return (
    <nav className="fixed top-0 w-full bg-primaryBackground">
      <div className="my-2 flex items-center justify-between">
        <img
          src={logo}
          alt="Logo"
          className="xsm:ml-[2rem] ml-[12%] w-[90px] sm:ml-[2.5rem] md:ml-[3rem]"
        />
        <ul className="mr-[15%] hidden gap-[1rem] lg:flex">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={navItemColorChange}
              onClick={() => scrollTo(item.id)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

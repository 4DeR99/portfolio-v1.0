import React from 'react';
import logo from 'assets/icons/logo.png';
import useScrollTo from 'hooks/useScrollTo';
import { navItems } from 'assets/consts';

function NavBar() {
  const { scrollTo } = useScrollTo();
  const navItemColorChange = `hover:text-primary hover:cursor-pointer`;
  return (
    <nav className="w-full fixed top-0 bg-primaryBackground">
      <div className="flex justify-between items-center my-2">
        <img
          src={logo}
          alt="Logo"
          className="w-[90px] ml-[12%] xsm:ml-[2rem] sm:ml-[2.5rem] md:ml-[3rem]"
        />
        <ul className="gap-[1rem] mr-[15%] hidden lg:flex">
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

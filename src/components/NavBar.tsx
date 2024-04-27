import React from 'react';
import logo from '../assets/icons/logo.png';

function NavBar() {
  return (
    <div className="flex items-center w-[100%] mt-[30px]">
      <img src={logo} alt="logo" className="w-20 h-20 ml-[15rem]" />
      <div className="flex text-[21px] gap-[28px]">
        <div>_about()</div>
        <div>_resume()</div>
        <div>_projects()</div>
        <div>_contact()</div>
      </div>
    </div>
  );
}

export default NavBar;

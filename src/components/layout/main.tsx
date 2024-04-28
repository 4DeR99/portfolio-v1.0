import React from 'react';
import NavBar from '../organisms/NavBar';
import Socials from '../organisms/Socials';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-center w-full h-full bg-background text-primaryText">
      <NavBar />
      <Socials />
      <main className="container flex flex-col m-auto">
        <div className="container flex flex-col w-full">{children}</div>
      </main>
    </div>
  );
}

export default Layout;

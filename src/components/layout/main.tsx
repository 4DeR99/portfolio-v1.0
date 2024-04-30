import React from 'react';
import NavBar from '../organisms/NavBar';
import Socials from '../organisms/Socials';
import Footer from 'components/organisms/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-center w-full h-full bg-primaryBackground text-primaryText">
      <NavBar />
      <Socials />
      <main className="container flex flex-col m-auto">
        <div className="container flex flex-col w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

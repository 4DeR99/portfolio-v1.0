import React from 'react';
import NavBar from '../organisms/NavBar';
import Socials from '../organisms/Socials';
import Footer from 'components/organisms/Footer';
import { Analytics } from '@vercel/analytics/react';
interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-full w-full flex-col items-center bg-primaryBackground text-primaryText">
      <NavBar />
      <Socials />
      <main className="container m-auto flex flex-col">
        <div className="container flex w-full flex-col">{children}</div>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default Layout;

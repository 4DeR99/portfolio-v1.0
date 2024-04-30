import React from 'react';
import Layout from 'components/layout/main';
import Hero from 'components/organisms/Hero';
import About from 'components/organisms/About';
import Resume from 'components/organisms/Resume';
import Projects from 'components/organisms/Projects';
import Contact from 'components/organisms/Contact';

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default Home;

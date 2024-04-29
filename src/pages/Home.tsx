import React from 'react';
import Layout from 'components/layout/main';
import Hero from 'components/organisms/Hero';
import About from 'components/organisms/About';
import Resume from 'components/organisms/Resume';

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Resume />
    </Layout>
  );
}

export default Home;

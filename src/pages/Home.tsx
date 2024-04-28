import React from 'react';
import Layout from 'components/layout/main';
import Hero from 'components/organisms/Hero';
import About from 'components/organisms/About';

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}

export default Home;

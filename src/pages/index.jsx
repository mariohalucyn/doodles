import * as React from 'react';
import '../components/sassStyles/_typography.scss';
import '../components/sassStyles/_global.scss';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';

function IndexPage() {
  return (
    <main>
      <Header />
      <Hero />
    </main>
  );
}

export default IndexPage;

export function Head() {
  return <title>Home Page</title>;
}

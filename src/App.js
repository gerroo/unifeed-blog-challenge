import React from 'react';

import Header from './Header';
import Article from './Article';

import logo from './assets/Logo.svg';
import {articles} from './data'


function App() {
  console.log(articles)
  const sw = window.screen.width;
  console.log(sw);
  return (
    <section className="container mx-auto px-6 py-4 block">
      <Header />

      <section className="py-16 sm:py-28 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {
          articles.map((article, i) =>
            <Article {...article} key={i} variant={i === 0 && sw > 640 && "horizontal"}/>
          )
        }
      </section>

      <div className="flex flex-wrap justify-between items-center mb-8">
        <img src={logo} alt=""/>
        <p className="text-neutral-600">
          Unifeed© All Copyrights Not Reserved
        </p>
      </div>
    </section>
  )
}

export default App;

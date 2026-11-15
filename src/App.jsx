import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import PhotoGallery from './components/PhotoGallery/PhotoGallery.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <section className="intro" aria-labelledby="gallery-heading">
          <p className="eyebrow">A little inspiration, one scroll at a time</p>
          <h1 id="gallery-heading">The Photo Gallery</h1>
          <p className="intro-copy">Discover beautiful moments from photographers around the world.</p>
        </section>
        <PhotoGallery />
      </main>
      <footer className="site-footer">Images from the <a href="https://picsum.photos/" target="_blank" rel="noreferrer">Lorem Picsum</a> collection</footer>
    </>
  );
}

import React from 'react';
import portolioImg from '../assets/portolio.jpg'; // Your image import

function Portfolio() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
        backgroundColor: 'grey',
        color: 'white',
        overflow: 'hidden',
        flexDirection: 'column', // vertical layout
      }}
    >
      {/* 📝 Text Content (now first, so on top) */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '600px',
          marginBottom: '2rem', // spacing below text
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Portfolio</h1>
        <p style={{ fontSize: '1.2rem' }}>
        A curated gallery capturing moments through our lens. Explore the stories behind each image and get inspired by the art of photography.
        </p>
      </div>

      {/* 📸 Image (now second, below the text) */}
      <img
        src={portolioImg}
        alt="portolio"
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '12px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
        }}
      />
    </section>
  );
}

export default Portfolio;







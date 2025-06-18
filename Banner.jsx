import React from 'react';
import { Parallax } from 'react-parallax';
import computerImg from '../assets/banner2.png';
import Body from './Body';
import Hero from './Hero';
import Portfolio from './portfolio';

function Banner() {
  return (
    <>
    <Parallax
      bgImage={computerImg}
      strength={300}
      bgImageStyle={{ minHeight: '100vh' }}
    >
      <div style={{ height: '100vh', position: 'relative' }}>
        {/* Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        />

        {/* Centered Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#fff',
          }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
            Welcome to Our Studio
          </h1>

          {/* Card with Form */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              display: 'inline-block',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              marginLeft: '-67rem',
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Form submitted!');
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                backgroundColor: '#fff',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                }}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                }}
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Parallax>
    
            <Body />
            <Hero />
            <Portfolio/>
    </>
  );
}

export default Banner;


















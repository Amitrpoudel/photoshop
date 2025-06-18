import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import pageBackground from '../assets/camera.png';
import protraitImg from '../assets/protrait.jpg';
import weddingImg from '../assets/wedding.jpg';
import eventImg from '../assets/event.jpg';
import fashionImg from '../assets/fashion.png';

// 🔦 Flash animation for camera effect (used for section background)
const FlashOverlay = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{ duration: 0.6, delay: 0.3 }}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      zIndex: 1,
      pointerEvents: 'none',
    }}
  />
);

// 🧩 Animated Card Component
function AnimatedCard({ animation, delay = 0, backgroundImage, title, description }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={animation}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 1.5, delay }}  // Adjust animation duration & delay here
      whileHover={{
        scale: 1.05,
        boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
      }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '1rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        height: '300px',
        color: 'white',
      }}
    >
      {/* 🔳 Static Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* 🌘 Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.2))',
          zIndex: 1,
        }}
      />

      {/* 📝 Text Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0.5rem',
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>
        {description && <p style={{ fontSize: '0.9rem' }}>{description}</p>}
      </div>
    </motion.div>
  );
}

// 📸 Main Body Component
function Body() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const leftAnim = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightAnim = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
      }}
    >
      {/* 🖼️ Background */}
      <div
        style={{
          backgroundImage: `url(${pageBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          filter: 'brightness(0.7)',
          marginLeft: '-5rem',
        }}
      />

      {/* ⚡ Flash Effect on Entire Section */}
      {inView && <FlashOverlay />}

      {/* 🧱 Card Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          maxWidth: '900px',
          width: '100%',
          zIndex: 2,
        }}
      >
        <AnimatedCard
          animation={leftAnim}
          delay={0.8}
          backgroundImage={protraitImg}
          title="Protrait"
          description="Professional portrait photography that captures the real you. Perfect for headshots, personal branding, and more."
        />
        <AnimatedCard
          animation={rightAnim}
          delay={0.8}
          backgroundImage={weddingImg}
          title="Wedding"
          description="Elegant and timeless wedding photography that preserves every emotion and detail of your special day."
        />
        <AnimatedCard
          animation={leftAnim}
          delay={0.8}
          backgroundImage={eventImg}
          title="Events"
          description="Capture the excitement of your events with candid, vibrant, and professional photography services."
        />
        <AnimatedCard
          animation={rightAnim}
          delay={0.8}
          backgroundImage={fashionImg}
          title="Fashion"
          description="High-end fashion photography designed for portfolios, magazines, and brands with creative flair."
        />
      </div>
    </section>
  );
}

export default Body;


















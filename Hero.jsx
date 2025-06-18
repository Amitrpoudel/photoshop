import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import computerImg from '../assets/body.png';
import { Parallax } from 'react-parallax';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <Parallax
        bgImage={computerImg}
        strength={300}
        bgImageStyle={{ minHeight: '100vh' }}
      >
        <section
          style={{
            padding: '2rem',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            backdropFilter: 'blur(4px)',
          }}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 80 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ maxWidth: '900px', margin: 'auto' }}
          >
            <h3
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
              }}
            >
              About Us
            </h3>
            <p
              style={{
                lineHeight: 1.7,
                fontSize: '1.05rem',
                textAlign: 'justify',
              }}
            >
              At [Studio Name], we believe that every moment is a masterpiece waiting to be captured. Located in the heart of [City/Location], our professional photo studio is dedicated to transforming your most cherished memories into timeless visual stories. Whether you're celebrating a wedding, organizing a corporate event, planning a fashion shoot, or scheduling a personal portrait session, our team of skilled photographers and creatives is here to bring your vision to life.
              <br /><br />
              We specialize in candid photography, cinematic videography, event coverage, and studio sessions, using state-of-the-art equipment and a deep understanding of lighting, composition, and storytelling. Our photographers are not only technically proficient but also artistically driven—ensuring every frame we deliver is meaningful, elegant, and emotionally resonant.
              <br /><br />
              From the initial consultation to the final edit, we prioritize a seamless and personalized experience. Our modern studio space offers a comfortable and creative environment for individuals, couples, families, and businesses alike.
              <br /><br />
              At [Studio Name], we don’t just take pictures—we capture emotions, preserve once-in-a-lifetime experiences, and create visual legacies you'll be proud to share.
              
            </p>
          </motion.div>
        </section>
      </Parallax>
    </>
  );
};

export default Hero;

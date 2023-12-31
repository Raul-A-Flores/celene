'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import {slideIn, staggerContainer, textVariant} from '../utils/motion';



const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ one:false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className='flex jusitfy=center items-center flex-col relative z-10'>
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
          >
        
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className='flex flex-row justifycenter items-center'
          >
           
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='relative w-full md:-mt-[20px] -mt-[12px] flex flex-row justify-center'
        >
              <img 
                src='/logo.png'
                alt='cover'
                className='w-[full] sm:h-[200px] h-[300px] object-cover rounded-tl-[140px] z-10 relative'
              />
        

      </motion.div>
    </motion.div>
    <div className='mt-5 flex justify-end mr-20 '>
      <iframe 
        src="https://player.twitch.tv/?channel=hebecelene&parent=127.0.0.1&parent=celene-moonfox.com"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620">

      </iframe>
      <iframe
        id="chat_embed"
        src="https://www.twitch.tv/embed/hebecelene/chat?parent=celene-moonfox.comm"
        height="500"
        width="350">
      </iframe>

    </div>

  </section>
);

export default Hero;

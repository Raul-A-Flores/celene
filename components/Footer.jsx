'use client';

import { motion } from 'framer-motion';
import { BsTwitter,} from 'react-icons/bs'
import { FaTiktok, } from 'react-icons/fa'

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        
        
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-black">
            HEBE CELENE
          </h4>
          <button type="button" className="flex items-center h-fit py-4 px-6  rounded-[32px] gap-[12px]">
            <img
              src="/live.png"
              alt="headset"
              className="w-[50px] h-[50px] "
              href="https://www.twitch.tv/hebecelene"
            />
            <a href="https://www.twitch.tv/hebecelene" className="font-extrabold text-[24px] text-black">
              TWITCH
            </a>
        </button>
          <p className="font-normal text-[14px] text-black opacity-70">
            Copyright © 2022 Hebe Celene. All rights reserved.
          </p>

          <div >
            <a href='https://twitter.com/HebeCelene'>    
              <BsTwitter size={30} />
            </a>
          </div>
          <div>
            <a href='https://www.tiktok.com/@hebecelene'>    
                <FaTiktok size={30} />
              </a>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
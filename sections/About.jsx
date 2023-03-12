'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Gamer's Paradise</span> is a new
        age platform for future of video gaming, one where you find and enjoy an exceptional gaming experience
        like it's really real, you can feel what you feel in this metaverse
        in any way you wish{' '}
        <span className="font-extrabold text-white">
          The gaming world begins
        </span>{' '}
        We cover your needs{' '}
        <span className="font-extrabold text-white">VR</span> from hardware
        to software so that you can experience it like never before. Let's{' '}
        <span className="font-extrabold text-white">explore</span> this universe
        and find the best for you.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

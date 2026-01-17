import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ParallaxBackground = () => {

    const {scrollYProgress } =  useScroll();
    const x =  useSpring(scrollYProgress, {damping: 50})
    const mountain3Y = useTransform(scrollYProgress, [0,0.5], ["0%" ,"70%"]);
    const mountain2Y = useTransform(scrollYProgress, [0,0.5], ["0%" ,"30%"]);
    const mountain1Y = useTransform(scrollYProgress, [0,0.5], ["0%" ,"0%"]);
    const planetsX = useTransform (scrollYProgress, [0,1], ["0%","-20%"]);

  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
            {/* Background sky */}
            <div className='absolute inset-0 w-full h-screen -z-50' style={{backgroundImage: "url(/public/assets/sky.jpg)", backgroundPosition:"bottom", backgroundSize:"cover",}}/>
            {/* Mountain Layer 3*/}
            <motion.div className='absolute inset-0 -z-40' style={{backgroundImage: "url(/public/assets/mountain-3.png)", backgroundPosition:"bottom", backgroundSize:"cover",  y: mountain3Y}}/>
            {/* Planets */}
            <motion.div className='absolute inset-0 -z-30' style={{backgroundImage: "url(/public/assets/planets.png)", backgroundPosition:"bottom", backgroundSize:"cover",  x: planetsX}}/>
            {/* Mountain Layer 2 */}
            <motion.div className='absolute inset-0 -z-30' style={{backgroundImage: "url(/public/assets/mountain-2.png)", backgroundPosition:"bottom", backgroundSize:"cover", y: mountain2Y}} />
            {/* mountain Layer 1 */}
            <motion.div className='absolute inset-0 -z-20' style={{backgroundImage: "url(/public/assets/mountain-1.png)", backgroundPosition:"bottom", backgroundSize:"cover", y: mountain1Y}}/>
        </div>
    </section>
  )
}

export default ParallaxBackground

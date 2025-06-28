import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import {
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  slideAnimation
} from '../config/motion'
import { CustomButton } from '../components'

const Home = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img
            src='./threejs.png'
            alt='logo'
            className='w-8 h-8 object-contain'/>
          </motion.header>
          <motion.div className='home-content'{...headContainerAnimation}>
            <motion.div {...headTextAnimation }>
              <h1 className='head-text'>
                A MODERN <br className='xl:block hidden' /> ONLINE STORE
              </h1>
            </motion.div>
            <motion.div
              className='flex flex-col gap-5'
               {...headContentAnimation}
              >
              <p className='max-w-md font-normal text-gray-600 text-base'>
                create your unique and exclusive wears with amazing 3d tools. <strong>let your imagination</strong>{" "} do the talking
              </p>
              <CustomButton 
              type = 'filled'
              title = 'customizer'
              handleClick = {() => state.intro = false}
              customStyles = 'w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
            
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
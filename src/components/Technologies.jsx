import React from 'react'
import {RiReactjsLine} from'react-icons/ri';
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiDjango } from "react-icons/di";
import { motion } from 'framer-motion'
const iconVariants =(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {

  return (
    <div className='border-b  border-neutral-800 pb-24'>
        <motion.h2 whileInView={{opacity: 1,y: 0}}
            initial={{opacity: 0,y: -100}}
            transition={{duration:1.7}}className='my-20 text-center text-3xl'> Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity: 1,x: 0}}
            initial={{opacity: 0,x: -200}}
            transition={{duration:1.7}} 
            className='flex flex-wrap justify-center gap-4'>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-cyan-400'size={40}/>
            </motion.div>
            <motion.div variants={iconVariants(3)}
            initial="initial"
            animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiJavascript  className='text-yellow-400'size={40}/>
            </motion.div>
            <motion.div variants={iconVariants(5)}
            initial="initial"
            animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaCss3Alt className='text-blue-400' size={40}/>
            </motion.div>
            <motion.div variants={iconVariants(8)}
            initial="initial"
            animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className=' text-red-400'size={40}/>
            </ motion.div>
            <motion.div variants={iconVariants(5)}
            initial="initial"
            animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-yellow-600'size={40}/>
            </motion.div>
            <motion.div variants={iconVariants(10)}
            initial="initial"
            animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJava className='text-red-800'size={40}/>
            </motion.div>
            <motion.div variants={iconVariants(12)}
            initial="initial"
            animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
                <GrMysql className='text-cyan-400'size={40}/>
            </motion.div>
            <motion.div variants={iconVariants(3)}
            initial="initial"
            animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiDjango className='text-green-700'size={40}/>
            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default Technologies

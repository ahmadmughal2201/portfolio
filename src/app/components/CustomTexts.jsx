'use client';
import React from 'react'
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "./motion";


export const TypingText = ({ title, textStyles }) => (
  <motion.p variants={textContainer} className={`font-normal text-[14px] text-secondary-white ${textStyles}`}>
    {Array.from(title).map((Letter, index) => (
      <motion.span variants={textVariant2} key={index}>{Letter}</motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2 variants={textVariant2}
  initial="hidden"
  whileInView="show"
  className={`mt-[8px] md:text-[64px] text-[40px] font-bold  text-white ${textStyles}`} 
  >{title}</motion.h2>
);

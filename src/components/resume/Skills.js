import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ skill, percentage }) => (
  <div className="overflow-x-hidden">
    <p className="text-sm uppercase font-medium">{skill}</p>
    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: `${percentage}%`, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
      >
        <span className="absolute -top-7 right-0">{percentage}%</span>
      </motion.span>
    </span>
  </div>
);

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Design Skill</h2>
          <ProgressBar skill="Figma" percentage={60} />
          <ProgressBar skill="UI/UX Design" percentage={80} />
        </div>
      </div>
      
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <ProgressBar skill="React" percentage={70} />
          <ProgressBar skill="HTML 5" percentage={80} />
          <ProgressBar skill="CSS3" percentage={80} />
          <ProgressBar skill="JavaScript" percentage={75} />
          <ProgressBar skill="Software Development" percentage={70} />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;

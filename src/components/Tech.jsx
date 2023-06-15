import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, iconVariant, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import { langSkills, technologies } from "../constants";

const LangCard = ({ data, index }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 w-full p-5 rounded-3xl min-w-min sm:w-[31%]"
    >
      <div className="flex gap-3 justify-start items-center">
        <img src={data.img} alt={data.name} className="w-24 rounded-xl" />
        <div>
          <p className="text-white font-black text-2xl">{data.name}</p>
          <p className="text-white font-black text-md">{data.status}</p>
        </div>
      </div>
    </motion.div>
  );
};
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>SKILLS</p>
        <h2 className={styles.sectionHeadText}>Programming.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I have more than 1 year of experience. During this time, I worked as a
        web developer in several organizations (Hamkorbank ATB, UzGASHKLITI,
        BePRO IT academy). My main programming languages ​​are Javascript and
        Python. I have contributed to more than 10 real projects.
      </motion.p>

      <motion.div
        variants={textVariant()}
        className="flex flex-row flex-wrap justify-center gap-10 mt-10"
      >
        {technologies.map((technology) => (
          <motion.div
            whileHover={{ scale: 1.3 }}
            key={technology.id}
            className="green-pink-gradient p-[4px] rounded-full shadow-card"
          >
            <img
              src={technology.icon}
              alt=""
              className="w-20 h-20 bg-white p-3 rounded-full"
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={textVariant()} className="mt-16 mb-5 text-center">
        <p className={styles.sectionSubText}>Language</p>
      </motion.div>

      <div
        className={`pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {langSkills.map((data, index) => (
          <LangCard key={index} index={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");

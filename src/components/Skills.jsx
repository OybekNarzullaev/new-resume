import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { frontSkills, backSkills, langSkills } from "../constants";
import { BallCanvas } from "./canvas";

const SkillCard = ({ data, index }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 min-w-[200px] w-[22%] p-10 rounded-3xl overflow-hidden relative"
  >
    <div className="flex gap-3 justify-start items-center">
      <div className="flex flex-col gap-3 w-full">
        <div key={data.code} className="w-28 h-28">
          <BallCanvas icon={data.icon} />
        </div>
        <p className="text-white font-black text-xl z-[2]">{data.name}</p>
      </div>
    </div>
    <div className="w-full border-4 border-sky-900 h-4 rounded-full mt-5">
      <div
        className="bg-gradient-to-b from-sky-600 to-sky-600/40 h-full rounded-full"
        style={{ width: `${data.per}%` }}
      ></div>
    </div>
  </motion.div>
);

const LangCard = ({ data, index }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 w-full p-10 rounded-3xl min-w-min sm:w-[31%]"
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

const Skills = () => {
  return (
    <>
      <div className={`mt-12 bg-tertiary rounded-[20px]`}>
        <div className={`bg-tertiary rounded-2xl ${styles.padding}`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Skills</p>
            <h2 className={styles.sectionHeadText}>Programming.</h2>
          </motion.div>
        </div>

        <div
          className={`pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
        >
          {frontSkills.map((tec, index) => (
            <SkillCard key={index} index={index} data={tec} />
          ))}
        </div>
      </div>
      <div className={`mt-12 bg-tertiary rounded-[20px]`}>
        <div className={`bg-tertiary rounded-2xl ${styles.padding}`}>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Languages.</h2>
          </motion.div>
        </div>

        <div
          className={`pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
        >
          {langSkills.map((data, index) => (
            <LangCard key={index} index={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "");

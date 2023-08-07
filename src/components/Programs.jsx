import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { programmingLanguages } from "../constants";
import { BallCanvas } from "./canvas";

const ProgramCard = ({ data, index }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 min-w-[180px] w-[15%] p-6 rounded-3xl overflow-hidden relative"
  >
    <div className="flex flex-col gap-3 w-full justify-center items-center">
      <div key={data.code} className="w-28 h-28">
        <BallCanvas icon={data.icon} />
      </div>
      <p className="text-white font-black text-xl z-[2]">{data.name}</p>
    </div>

    <div className="w-full border-4 border-sky-900 h-4 rounded-full mt-5">
      <div
        className="bg-gradient-to-b from-sky-600 to-sky-600/40 h-full rounded-full"
        style={{ width: `${data.per}%` }}
      ></div>
    </div>
  </motion.div>
);

const Programs = () => {
  return (
    <div className={`mt-12 bg-tertiary rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding}`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Skills</p>
          <h2 className={styles.sectionHeadText}>Programming languages.</h2>
        </motion.div>
      </div>

      <div
        className={`pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}
      >
        {programmingLanguages.map((item, index) => (
          <ProgramCard index={index} key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Programs, "");

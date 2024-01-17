import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { React } from "react";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Another</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
      </motion.div>

      <div className="flex fkex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");

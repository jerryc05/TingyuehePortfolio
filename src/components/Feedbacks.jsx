import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { fun_facts } from "../constants";

const FeedbackCard = ({
  index,
  funfact,
  name,
  // designation,
  // company,
  // image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3x1 xs:w-[320px] w-full -my-7"
  >
    <p className="text-white font-black text-[48px]"></p>
    <p className="text-center text-white tracking-wider text-[18px]">
      {funfact}
    </p>
    <div className="mt flex justify-between items-center">
      <div className="flex flex-col">
        <p className="text-center text-white font-medium text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
      </div>
    </div>
  </motion.div>
);
{
  /* <div className="mt-1"> */
}
{
  /* <p className="mt-1 text-secondary text-[12px]"> {designation} of {company}
    </p> */
}
{
  /* <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        /> */
}
{
  /* </div> */
}
const Feedbacks = () => {
  return (
    <div className={`bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            Some fun fact
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}> Myself </h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {fun_facts.map((funfact, index) => (
          <FeedbackCard key={funfact.name} index={index} {...funfact} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

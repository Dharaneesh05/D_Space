"use client";

import { motion } from "framer-motion";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";

const FULL_STACK_ROW = [
  // Frontend
  { skill_name: "HTML5", image: "html.png", width: 52, height: 52, color: "227,76,38" },
  { skill_name: "CSS3", image: "css.png", width: 52, height: 52, color: "38,77,228" },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 52, height: 52, color: "56,189,248" },
  { skill_name: "React.js", image: "react.png", width: 52, height: 52, color: "97,218,251" },
  { skill_name: "Next.js", image: "next.png", width: 52, height: 52, color: "255,255,255" },
  // Backend
  { skill_name: "Node.js", image: "node.png", width: 52, height: 52, color: "102,159,99" },
  { skill_name: "Express.js", image: "express.png", width: 52, height: 52, color: "255,255,255" },
  { skill_name: "Firebase", image: "firebase.png", width: 52, height: 52, color: "255,202,40" },
  { skill_name: "Spring Boot", image: "spring.svg", width: 52, height: 52, color: "109,179,63" },
  // Database
  { skill_name: "MongoDB", image: "mongodb.png", width: 52, height: 52, color: "67,153,52" },
  { skill_name: "MySQL", image: "mysql.png", width: 52, height: 52, color: "0,117,143" },
  { skill_name: "Redis", image: "redis.svg", width: 52, height: 52, color: "220,56,45" },
];

const PROGRAMMING_LANGUAGES = [
  { skill_name: "Python", image: "python.svg", width: 52, height: 52, color: "55,118,171" },
  { skill_name: "Java", image: "java.svg", width: 52, height: 52, color: "237,139,0" },
  { skill_name: "JavaScript", image: "js.png", width: 52, height: 52, color: "247,223,30" },
  { skill_name: "TypeScript", image: "ts.png", width: 52, height: 52, color: "49,120,198" },
];

const AI_ML = [
  { skill_name: "Scikit-Learn", image: "scikit.svg", width: 52, height: 52, color: "247,147,30" },
  { skill_name: "TensorFlow", image: "tensorflow.svg", width: 52, height: 52, color: "255,111,0" },
  { skill_name: "OpenCV", image: "opencv.svg", width: 52, height: 52, color: "92,62,232" },
  { skill_name: "Pandas", image: "pandas.svg", width: 52, height: 52, color: "21,4,88" },
];

const TOOLS = [
  { skill_name: "Git", image: "git.png", width: 52, height: 52, color: "240,80,50" },
  { skill_name: "Docker", image: "docker.png", width: 52, height: 52, color: "33,150,243" },
  { skill_name: "Power BI", image: "powerbi.png", width: 52, height: 52, color: "242,196,50" },
  { skill_name: "VS Code", image: "vscode.svg", width: 52, height: 52, color: "0,122,204" },
  { skill_name: "Postman", image: "postman.svg", width: 52, height: 52, color: "255,108,55" },
];

const EXPLORING = [
  { skill_name: "Golang", image: "go.png", width: 52, height: 52, color: "0,173,216" },
  { skill_name: "System Design", image: "systemdesign.svg", width: 52, height: 52, color: "255,255,255" },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full pt-20 md:pt-24 pb-16 scroll-mt-20 overflow-hidden"
    >
      <div className="relative mx-auto max-w-5xl px-5 md:px-6">
        <div className="w-full flex flex-col">
          {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#FAFAFA] tracking-tight mb-2">
            Skills
          </h2>
          <p className="text-[#A1A1AA] text-sm md:text-base max-w-2xl mx-auto">
            Technologies I use to build real-world applications
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-10 w-full">
          
          {/* Full-Stack Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col"
          >
            <div className="w-full border-b border-[#3F3F46]/50 pb-2 mb-5">
              <h3 className="text-sm md:text-base font-bold text-[#A1A1AA] uppercase tracking-widest">
                Full-Stack Development
              </h3>
            </div>
            {/* Unified Row: Frontend + Backend + Database */}
            <div className="flex flex-wrap justify-start gap-4 md:gap-5 w-full">
              {FULL_STACK_ROW.map((skill, i) => (
                <SkillDataProvider key={skill.skill_name} src={skill.image} name={skill.skill_name} width={skill.width} height={skill.height} index={i} color={skill.color} />
              ))}
            </div>
          </motion.div>

          {/* 2-Column Grid Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
            
            {/* Programming Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="w-full border-b border-[#3F3F46]/50 pb-2 mb-5">
                <h3 className="text-sm md:text-base font-bold text-[#A1A1AA] uppercase tracking-widest">
                  Programming Languages
                </h3>
              </div>
              <div className="flex flex-wrap justify-start gap-4 md:gap-5">
                {PROGRAMMING_LANGUAGES.map((skill, i) => (
                  <SkillDataProvider key={skill.skill_name} src={skill.image} name={skill.skill_name} width={skill.width} height={skill.height} index={i} color={skill.color} />
                ))}
              </div>
            </motion.div>

            {/* AI / Machine Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="w-full border-b border-[#3F3F46]/50 pb-2 mb-5">
                <h3 className="text-sm md:text-base font-bold text-[#A1A1AA] uppercase tracking-widest">
                  AI / Machine Learning
                </h3>
              </div>
              <div className="flex flex-wrap justify-start gap-4 md:gap-5">
                {AI_ML.map((skill, i) => (
                  <SkillDataProvider key={skill.skill_name} src={skill.image} name={skill.skill_name} width={skill.width} height={skill.height} index={i} color={skill.color} />
                ))}
              </div>
            </motion.div>

          </div>

          {/* 2-Column Grid Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
            
            {/* Tools & Ecosystem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col"
            >
              <div className="w-full border-b border-[#3F3F46]/50 pb-2 mb-5">
                <h3 className="text-sm md:text-base font-bold text-[#A1A1AA] uppercase tracking-widest">
                  Tools & Ecosystem
                </h3>
              </div>
              <div className="flex flex-wrap justify-start gap-4 md:gap-5">
                {TOOLS.map((skill, i) => (
                  <SkillDataProvider key={skill.skill_name} src={skill.image} name={skill.skill_name} width={skill.width} height={skill.height} index={i} color={skill.color} />
                ))}
              </div>
            </motion.div>

            {/* Currently Exploring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col"
            >
              <div className="w-full border-b border-[#3F3F46]/50 pb-2 mb-5">
                <h3 className="text-sm md:text-base font-bold text-[#A1A1AA] uppercase tracking-widest">
                  Currently Exploring
                </h3>
              </div>
              <div className="flex flex-wrap justify-start gap-4 md:gap-5">
                {EXPLORING.map((skill, i) => (
                  <SkillDataProvider key={skill.skill_name} src={skill.image} name={skill.skill_name} width={skill.width} height={skill.height} index={i} color={skill.color} />
                ))}
              </div>
            </motion.div>

          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

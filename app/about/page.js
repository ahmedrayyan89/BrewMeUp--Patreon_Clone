
// "use client"
// import { motion } from 'framer-motion';
// import React from 'react'

// const About = () => {
//   return (
//     <main className="min-h-screen bg-gradient-to-r from-[#1f1f2e] to-[#0e0e1b] text-white px-6 py-16">
//       <div className="max-w-3xl mx-auto text-center space-y-6">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl font-bold text-blue-400"
//         >
//           About BrewMeUp
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-gray-300 text-lg"
//         >
//           BrewMeUp is a dynamic platform inspired by Patreon, designed to empower creators across various fields. Our vision is to create a seamless and supportive platform where creators are able to reach out directly to their patrons, building a community of co-growth and sustainability.Whether you are an author writing good stories, a programmer writing smart software, a designer making striking visuals, or a teacher providing useful knowledge, BrewMeUp is here for you. We provide you with tools and assets to create and interact with your community, letting you earn a living income as you pursue what you love to do.Our site is founded upon the values of transparency, trust, and peer support. We are convinced that by linking creatives with their patrons, we can build a healthy ecosystem in which creativity and innovation thrive. Sign up to BrewMeUp today and get started on transforming your passion into a viable living.

//         </motion.p>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-gray-400"
//         >
//           Whether you're a writer, developer, artist, or educator — we help you grow your community and get funded.
//         </motion.p>
//       </div>
//     </main>
//   );
// };

// export default About;
"use client"
import { motion } from 'framer-motion';
import React from 'react';
import { FaHeart, FaLightbulb, FaHandsHelping, FaPaintBrush, FaCode, FaBook, FaChalkboardTeacher } from 'react-icons/fa';

const About = () => {
  const creatorTypes = [
    { icon: <FaBook className="text-purple-400" />, label: "Writers" },
    { icon: <FaCode className="text-blue-400" />, label: "Developers" },
    { icon: <FaPaintBrush className="text-pink-400" />, label: "Artists" },
    { icon: <FaChalkboardTeacher className="text-green-400" />, label: "Educators" }
  ];

  const coreValues = [
    { icon: <FaHandsHelping className="text-yellow-400" />, title: "Community", desc: "Foster meaningful connections between creators and supporters" },
    { icon: <FaLightbulb className="text-teal-400" />, title: "Innovation", desc: "Continuous platform improvements to serve creators better" },
    { icon: <FaHeart className="text-red-400" />, title: "Passion", desc: "Fueling creative pursuits that matter to you" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0a1e] via-[#1a103a] to-[#2a154d] text-white px-6 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              About BrewMeUp
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full" />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Empowering creators to turn their passion into sustainable income through direct community support
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Our Vision
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              BrewMeUp is a dynamic platform inspired by Patreon, designed to empower creators across various fields. 
              We envision a world where creative minds can focus on what they love while being fairly compensated by 
              their most passionate supporters.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're crafting stories, building software, creating art, or sharing knowledge, BrewMeUp provides 
              the tools and community to transform your passion into a sustainable livelihood.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1e1b3a] to-[#2a154d] p-8 rounded-2xl border border-[#3a2a6d] shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-300">Who Uses BrewMeUp?</h3>
            <div className="grid grid-cols-2 gap-4">
              {creatorTypes.map((type, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-4 bg-[#2a1b4a] rounded-lg hover:bg-[#3a2a6d] transition-all"
                >
                  <div className="text-3xl mb-2">{type.icon}</div>
                  <span className="font-medium">{type.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#1a1438] p-8 rounded-xl border border-[#3a2a6d] hover:border-blue-400 transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Creative Community?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a creator looking to monetize your work or a supporter wanting to fund creativity, 
            BrewMeUp is your platform.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all hover:shadow-lg hover:shadow-purple-500/30">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
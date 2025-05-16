"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiImage, FiServer } from "react-icons/fi";
import { 
  FiSearch, FiHeart, FiUser, FiAward, FiTrendingUp, FiStar, 
  FiMusic, FiCode, FiPenTool, FiBook, FiCamera, FiMic, FiFilm,
  FiZap, FiPieChart, FiGlobe, FiCoffee 
} from 'react-icons/fi';

// Category-specific components
const CategoryHeader = ({ title, description, icon, color }) => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16 pt-10"
  >
    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#1a1438] to-[#3a2a6d] mb-6">
      {React.cloneElement(icon, { className: `text-3xl ${color}` })}
    </div>
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
        {title}
      </span>
    </h1>
    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { name: "All", icon: <FiZap /> },
    { name: "Art", icon: <FiPenTool /> },
    { name: "Music", icon: <FiMusic /> },
    { name: "Writing", icon: <FiBook /> },
    { name: "Programming", icon: <FiCode /> },
    { name: "Education", icon: <FiPieChart /> },
    { name: "Design", icon: <FiCamera /> },
    { name: "Podcast", icon: <FiMic /> },
    { name: "Video", icon: <FiFilm /> }
  ];

  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-3 mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {categories.map((category) => (
        <motion.button
          key={category.name}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCategory(category.name)}
          className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === category.name
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
              : 'bg-[#1a1438] text-gray-300 hover:bg-[#2a1b4a] border border-[#3a2a6d]'
          }`}
        >
          {React.cloneElement(category.icon, { className: "mr-2" })}
          {category.name}
        </motion.button>
      ))}
    </motion.div>
  );
};

// Complete category data with creators arrays
const categoryData = {
  All: {
    title: "Explore All Creators",
    description: "Discover amazing creators across all categories",
    icon: <FiGlobe />,
    color: "text-blue-400",
    creators: [
      {
        id: 1,
        name: "Digital Art Studio",
        category: "Art",
        description: "Creating stunning digital artwork and character designs",
        supporters: 1243,
        tier: "Premium",
        icon: <FiPenTool className="text-pink-500 text-6xl" />,
        earnings: "$3,245/mo"
      },
      {
        id: 2,
        name: "Code Masters",
        category: "Programming",
        description: "Advanced coding tutorials and projects",
        supporters: 2895,
        tier: "Featured",
        icon: <FiCode className="text-blue-400 text-6xl" />,
        earnings: "$6,780/mo"
      },
      {
        id: 3,
        name: "Data Science Pro",
        category: "Machine Learning",
        description: "In-depth data science tutorials and real-world projects",
        supporters: 3820,
        tier: "Featured",
        icon: <FiDatabase className="text-green-500 text-6xl" />,
        earnings: "$8,950/mo"
      },
      {
        id: 4,
        name: "Design Wizards",
        category: "UI/UX Design",
        description: "Masterclass in modern UI/UX design techniques",
        supporters: 1450,
        tier: "Popular",
        icon: <FiPenTool className="text-purple-500 text-6xl" />,
        earnings: "$4,230/mo"
      },
      {
        id: 5,
  name: "Pixel Artists",
  category: "Digital Art",
  description: "Learn pixel art, game sprites, and animation techniques",
  supporters: 920,
  tier: "Rising",
  icon: <FiImage className="text-pink-500 text-6xl" />,
  earnings: "$2,150/mo"
      },
      {
        id: 6,
  name: "DevOps Engineers",
  category: "Cloud & DevOps",
  description: "CI/CD pipelines, Kubernetes, and cloud infrastructure guides",
  supporters: 2100,
  tier: "Popular",
  icon: <FiServer className="text-orange-500 text-6xl" />,
  earnings: "$5,640/mo"
      }
    ]
  },
  Art: {
    title: "Art & Illustration",
    description: "Support digital artists, painters, and illustrators",
    icon: <FiPenTool />,
    color: "text-pink-500",
    creators: [
      {
        id: 1,
        name: "Digital Art Studio",
        description: "Creating stunning digital artwork and character designs",
        supporters: 1243,
        tier: "Premium",
        icon: <FiPenTool className="text-pink-500 text-6xl" />,
        earnings: "$3,245/mo"
      },
      {
        id: 2,
        name: "Watercolor Dreams",
        description: "Traditional watercolor painting tutorials",
        supporters: 842,
        icon: <FiPenTool className="text-blue-400 text-6xl" />,
        earnings: "$1,980/mo"
      },
      {
        id: 3,
        name: "Concept Art Pro",
        description: "Game and film concept art development",
        supporters: 1567,
        tier: "Featured",
        icon: <FiPenTool className="text-purple-500 text-6xl" />,
        earnings: "$4,320/mo"
      }
    ]
  },
  Music: {
    title: "Music Creators",
    description: "Support musicians, composers, and audio producers",
    icon: <FiMusic />,
    color: "text-purple-500",
    creators: [
      {
        id: 1,
        name: "Electronic Dreams",
        description: "Original electronic music and production tutorials",
        supporters: 892,
        tier: "Popular",
        icon: <FiMusic className="text-purple-500 text-6xl" />,
        earnings: "$2,100/mo"
      },
      {
        id: 2,
        name: "Classical Masters",
        description: "Traditional classical music performances",
        supporters: 1204,
        icon: <FiMusic className="text-amber-400 text-6xl" />,
        earnings: "$3,450/mo"
      }
    ]
  },
  Writing: {
    title: "Writers & Authors",
    description: "Support novelists, poets, and content creators",
    icon: <FiBook />,
    color: "text-amber-400",
    creators: [
      {
        id: 1,
        name: "Literary Haven",
        description: "Weekly short stories and novel chapters",
        supporters: 1567,
        tier: "Featured",
        icon: <FiBook className="text-amber-400 text-6xl" />,
        earnings: "$4,320/mo"
      },
      {
        id: 2,
        name: "Poetry Corner",
        description: "Daily poems and writing workshops",
        supporters: 723,
        icon: <FiBook className="text-pink-400 text-6xl" />,
        earnings: "$1,650/mo"
      }
    ]
  },
  Programming: {
    title: "Developers & Coders",
    description: "Support open source developers and coding educators",
    icon: <FiCode />,
    color: "text-blue-400",
    creators: [
      {
        id: 1,
        name: "Code With Me",
        description: "Interactive coding tutorials and live sessions",
        supporters: 892,
        tier: "Popular",
        icon: <FiCode className="text-blue-400 text-6xl" />,
        earnings: "$5,780/mo"
      },
      {
        id: 2,
        name: "Web Dev Simplified",
        description: "Frontend development courses and resources",
        supporters: 2105,
        tier: "Featured",
        icon: <FiCode className="text-green-400 text-6xl" />,
        earnings: "$7,890/mo"
      }
    ]
  },
  Education: {
    title: "Educators & Teachers",
    description: "Support educators sharing knowledge and skills",
    icon: <FiPieChart />,
    color: "text-green-400",
    creators: [
      {
        id: 1,
        name: "Science Simplified",
        description: "Making complex concepts accessible to all",
        supporters: 3201,
        tier: "Featured",
        icon: <FiBook className="text-green-400 text-6xl" />,
        earnings: "$8,450/mo"
      },
      {
        id: 2,
        name: "Math Wizards",
        description: "Advanced mathematics tutorials",
        supporters: 1456,
        icon: <FiPieChart className="text-blue-400 text-6xl" />,
        earnings: "$3,980/mo"
      }
    ]
  },
  Design: {
    title: "Design Creators",
    description: "Support UI/UX designers and visual artists",
    icon: <FiCamera />,
    color: "text-teal-400",
    creators: [
      {
        id: 1,
        name: "Pixel Perfect",
        description: "UI/UX design courses and resources",
        supporters: 743,
        icon: <FiPenTool className="text-teal-400 text-6xl" />,
        earnings: "$1,980/mo"
      },
      {
        id: 2,
        name: "Brand Masters",
        description: "Logo and brand identity design",
        supporters: 932,
        tier: "Popular",
        icon: <FiCamera className="text-purple-400 text-6xl" />,
        earnings: "$2,780/mo"
      }
    ]
  }
};

export default function ExploreCategory({ params }) {
  const category = params?.category || "All";
  const categoryInfo = categoryData[category] || categoryData.All;
  const { title, description, icon, color, creators = [] } = categoryInfo;
  const [activeCategory, setActiveCategory] = React.useState(category);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0a1e] via-[#1a103a] to-[#2a154d] text-white p-4 md:p-10">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-purple-500/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <CategoryHeader 
          title={title} 
          description={description} 
          icon={icon} 
          color={color} 
        />

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1a1438]/50 backdrop-blur-sm p-6 rounded-2xl border border-[#3a2a6d] mb-16 shadow-xl"
        >
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400 text-xl" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-3 bg-[#1a1438] border border-[#3a2a6d] rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
              placeholder={`Search ${category.toLowerCase()} creators...`}
            />
          </div>

          <CategoryFilter 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        </motion.div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {creators?.map((creator, index) => (
            <motion.div
              key={creator.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.2)" }}
              className="bg-gradient-to-b from-[#1a1438] to-[#2a154d] p-6 rounded-2xl border border-[#3a2a6d] hover:border-purple-400 transition-all shadow-lg overflow-hidden relative group"
            >
              {/* Tier Badge */}
              {creator.tier && (
                <div className={`absolute top-4 right-4 text-white text-xs px-3 py-1 rounded-full flex items-center ${
                  creator.tier === "Premium" ? "bg-gradient-to-r from-purple-500 to-pink-500" :
                  creator.tier === "Featured" ? "bg-gradient-to-r from-amber-500 to-orange-500" :
                  "bg-gradient-to-r from-blue-400 to-cyan-500"
                }`}>
                  <FiStar className="mr-1" /> {creator.tier}
                </div>
              )}
              
              {/* Creator Avatar */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="h-48 bg-gradient-to-br from-[#2a1b4a] to-[#3a2a6d] rounded-xl mb-5 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all"
              >
                {creator.icon}
              </motion.div>
              
              {/* Creator Info */}
              <div className="mb-4">
                <h2 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                  {creator.name}
                </h2>
                <p className="text-gray-400 text-sm mb-4">{creator.description}</p>
              </div>
              
              {/* Stats and CTA */}
              <div className="flex justify-between items-center pt-4 border-t border-[#3a2a6d]">
                <div className="flex items-center text-sm text-gray-300">
                  <FiHeart className="mr-2 text-pink-400" /> 
                  <span>{creator.supporters.toLocaleString()} supporters</span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-purple-300 font-medium">{creator.earnings}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md"
                >
                  Support
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category-Specific CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="bg-gradient-to-r from-[#1a1438] to-[#2a154d] p-8 rounded-3xl border-2 border-[#3a2a6d] shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {category === "All" 
                ? "Ready to Find Your Favorite Creators?" 
                : `Join the ${category} Community`}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {category === "All" 
                ? "Browse thousands of creators across all categories and support the work you love."
                : category === "Art"
                ? "Get exclusive access to digital art, behind-the-scenes content, and artist communities."
                : category === "Music"
                ? "Get early access to new tracks, exclusive content, and connect with musicians."
                : category === "Writing"
                ? "Receive early chapters, exclusive stories, and interact with your favorite authors."
                : category === "Programming"
                ? "Access premium tutorials, code repositories, and developer communities."
                : category === "Education"
                ? "Get in-depth courses, study materials, and direct access to educators."
                : "Access premium design resources, templates, and creative communities."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-8 rounded-xl transition-all shadow-lg text-lg"
              >
                {category === "All" ? "Browse All Creators" : `Explore ${category}`}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#1a1438] hover:bg-[#2a1b4a] border-2 border-[#3a2a6d] text-white font-medium py-3 px-8 rounded-xl transition-all shadow-lg text-lg"
              >
                Become a Creator
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
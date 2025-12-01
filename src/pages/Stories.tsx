import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample story data
const stories = [
  {
    id: 1,
    title: "The King of the Jungle",
    excerpt:
      "Discover the fascinating social structure of lion prides and their role in the African savanna.",
    image: "/src/assets/imgs/lion.png",
    author: "Dr. Sarah Johnson",
    date: "November 15, 2023",
    readTime: "5 min read",
    category: "Wildlife",
  },
  {
    id: 2,
    title: "Gentle Giants",
    excerpt:
      "Exploring the complex family dynamics and emotional intelligence of African elephants.",
    image: "/src/assets/imgs/elephants.png",
    author: "Michael Chen",
    date: "October 28, 2023",
    readTime: "7 min read",
    category: "Conservation",
  },
  {
    id: 3,
    title: "The Silent Stalker",
    excerpt:
      "Unveiling the secretive life of leopards and their remarkable adaptability to various habitats.",
    image: "/src/assets/imgs/leopard.png",
    author: "Amina Diallo",
    date: "October 10, 2023",
    readTime: "6 min read",
    category: "Wildlife",
  },
  {
    id: 4,
    title: "Mountain Gorillas",
    excerpt:
      "A close look at the conservation efforts saving these magnificent primates from extinction.",
    image: "/src/assets/imgs/gorilla.png",
    author: "Dr. James Peterson",
    date: "September 22, 2023",
    readTime: "8 min read",
    category: "Conservation",
  },
  {
    id: 5,
    title: "The Speed Demon",
    excerpt:
      "How the cheetah achieves its incredible speed and the challenges it faces in the wild.",
    image: "/src/assets/imgs/cheetah.png",
    author: "Naledi Moloi",
    date: "September 5, 2023",
    readTime: "5 min read",
    category: "Wildlife",
  },
  {
    id: 6,
    title: "Zebra Stripes",
    excerpt:
      "The science behind zebra stripes and their role in temperature regulation and predator evasion.",
    image: "/src/assets/imgs/Zebra.png",
    author: "Dr. Thomas Wright",
    date: "August 18, 2023",
    readTime: "6 min read",
    category: "Science",
  },
];

const Stories = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "Wildlife", "Conservation", "Science"];

  const filteredStories =
    activeCategory === "all"
      ? stories
      : stories.filter((story) => story.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <head>
        <title>Wildlife Stories | Zoravia Terra Journeys</title>
        <meta
          name="description"
          content="Inspiring stories about wildlife and conservation efforts"
        />
      </head>

      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Wildlife Stories
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Discover captivating tales from the wild and conservation efforts
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-green-600 text-white"
                  : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredStories.map((story, index) => (
            <motion.article
              key={story.id}
              className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 w-full">
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-3 right-3 rounded-full bg-green-600 px-2 py-1 text-xs font-semibold text-white">
                  {story.category}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center text-sm text-gray-500">
                  <span>{story.date}</span>
                  <span className="mx-2">•</span>
                  <span>{story.readTime}</span>
                </div>

                <h2 className="mb-2 text-xl font-bold text-gray-900">
                  {story.title}
                </h2>
                <p className="mb-4 flex-1 text-gray-600">{story.excerpt}</p>

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 font-medium text-gray-600">
                      {story.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      {story.author}
                    </span>
                  </div>
                  <button className="text-sm font-medium text-green-600 hover:text-green-700">
                    Read more →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500">
              No stories found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stories;

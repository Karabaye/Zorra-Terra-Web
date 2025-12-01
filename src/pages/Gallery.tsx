import React, { useState } from "react";
import { motion } from "framer-motion";

// Import animal images
const animalImages = [
  {
    id: 1,
    src: "/src/assets/imgs/lion.png",
    name: "Lion",
    category: "Big Cats",
  },
  {
    id: 2,
    src: "/src/assets/imgs/elephants.png",
    name: "Elephant",
    category: "Large Mammals",
  },
  {
    id: 3,
    src: "/src/assets/imgs/leopard.png",
    name: "Leopard",
    category: "Big Cats",
  },
  {
    id: 4,
    src: "/src/assets/imgs/gorilla.png",
    name: "Gorilla",
    category: "Primates",
  },
  {
    id: 5,
    src: "/src/assets/imgs/cheetah.png",
    name: "Cheetah",
    category: "Big Cats",
  },
  {
    id: 6,
    src: "/src/assets/imgs/Zebra.png",
    name: "Zebra",
    category: "Herbivores",
  },
  {
    id: 7,
    src: "/src/assets/imgs/Giraffe.png",
    name: "Giraffe",
    category: "Herbivores",
  },
  {
    id: 8,
    src: "/src/assets/imgs/Hippopotamus.png",
    name: "Hippopotamus",
    category: "Large Mammals",
  },
  {
    id: 9,
    src: "/src/assets/imgs/chimpanzee.png",
    name: "Chimpanzee",
    category: "Primates",
  },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState(animalImages);

  const categories = [
    "all",
    ...new Set(animalImages.map((item) => item.category)),
  ];

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredItems(animalImages);
    } else {
      setFilteredItems(
        animalImages.filter((item) => item.category === category),
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <head>
        <title>Wildlife Gallery | Zoravia Terra Journeys</title>
        <meta
          name="description"
          content="Explore the magnificent wildlife through our gallery"
        />
      </head>

      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Wildlife Gallery
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Discover the beauty and diversity of African wildlife
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-green-600 text-white"
                  : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((animal) => (
            <motion.div
              key={animal.id}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-80 w-full">
                <img
                  src={animal.src}
                  alt={animal.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{animal.name}</h3>
                    <p className="text-sm text-gray-200">{animal.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500">
              No animals found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { stories } from "../util/stories";

export default function Stories() {
  const [selected, setSelected] = useState("All");
  const categories = ["All", "Wildlife", "Conservation"];

  const filteredStories =
    selected === "All"
      ? stories
      : stories.filter((story) => story.category === selected);

  return (
    <div
      style={{ background: "hsl(var(--background))" }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="from-primary/5 to-background relative bg-[#eceae4] bg-gradient-to-b py-48">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary/10 text-primary mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-medium"
          >
            Our Stories
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-foreground mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            Tales from the <span className="text-gradient">Wild</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl"
          >
            Explore inspiring stories about Africa's wildlife, conservation
            efforts, and the beauty of nature.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-border/50 border-b py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`cursor-pointer rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selected === cat
                    ? "= text-primary-foreground shadow-primary/25 shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2"
            >
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/stories/${story.id}`}
                    className="group block h-full"
                  >
                    <article className="bg-card hover:shadow-primary/5 h-full overflow-hidden rounded-2xl shadow-sm transition-all duration-500 hover:-translate-y-1">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <span className="absolute top-4 left-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                          {story.category}
                        </span>
                      </div>

                      <div className="p-6">
                        <h2 className="font-display text-foreground group-hover:text-primary mb-3 text-xl font-semibold transition-colors">
                          {story.title}
                        </h2>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {story.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="text-muted-foreground flex items-center gap-4 text-xs">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {story.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {story.readTime}
                            </span>
                          </div>
                          <span className="flex items-center gap-1 text-sm font-medium text-[#7c3aed] opacity-0 transition-all group-hover:opacity-100">
                            Read <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

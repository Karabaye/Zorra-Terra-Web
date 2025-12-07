import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ChevronUp,
  ChevronRight,
  Image as ImageIcon,
  MapPin,
  Users,
  Mountain,
  Heart,
} from "lucide-react";
import { stories } from "../util/stories";
import { useParams } from "react-router-dom";

// Story details component
export default function StoryDetails() {
  const { storyId } = useParams();
  const story = stories.find((s) => s.id === parseInt(storyId)) || stories[0];

  // Scroll to top when storyId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [storyId]);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={story.image}
            alt={story.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </motion.div>

        <div className="relative h-full">
          <div className="container mx-auto h-full px-4">
            <div className="flex h-full flex-col justify-end pb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-4xl"
              >
                <Link
                  to="/stories"
                  className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Stories
                </Link>

                <span className="mb-4 inline-block rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                  {story.category}
                </span>

                <h1 className="font-display mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  {story.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={story.authorImage}
                      alt={story.author}
                      className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {story.author}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-white/80">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {story.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {story.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs text-white">
                      <MapPin className="h-3 w-3" />
                      {story.location}
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs text-white">
                      <Users className="h-3 w-3" />
                      {story.groupSize}
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs text-white">
                      <Mountain className="h-3 w-3" />
                      {story.difficulty}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <p className="text-foreground mb-8 text-xl leading-relaxed font-medium">
                  {story.excerpt}
                </p>

                {/* First Photo Grid */}
                <div className="my-12 grid grid-cols-2 gap-4 md:grid-cols-3">
                  {story.gallery.slice(0, 3).map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="group relative cursor-pointer overflow-hidden rounded-xl"
                    >
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                    </motion.div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="text-foreground space-y-6 leading-relaxed">
                  {story.content.split("\n\n").map((paragraph, index) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <motion.h2
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                          className="mt-12 mb-6 text-2xl font-bold"
                        >
                          {paragraph.replace("## ", "")}
                        </motion.h2>
                      );
                    } else if (paragraph.startsWith("> ")) {
                      return (
                        <motion.blockquote
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                          className="my-8 border-l-4 border-[#7c3aed] pl-6 text-lg italic"
                        >
                          {paragraph.replace("> ", "")}
                        </motion.blockquote>
                      );
                    } else if (paragraph.startsWith("- **")) {
                      const items = paragraph
                        .split("\n")
                        .filter((l) => l.startsWith("- **"));
                      return (
                        <motion.ul
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                          className="my-6 list-disc space-y-2 pl-6"
                        >
                          {items.map((item, i) => (
                            <li key={i} className="text-foreground">
                              {item.replace("- **", "").replace("**", "")}
                            </li>
                          ))}
                        </motion.ul>
                      );
                    } else if (paragraph.startsWith("**")) {
                      return (
                        <motion.h3
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                          className="mt-8 mb-4 text-xl font-semibold"
                        >
                          {paragraph.replace("**", "").replace("**", "")}
                        </motion.h3>
                      );
                    }

                    return (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                        className="text-foreground"
                      >
                        {paragraph}
                      </motion.p>
                    );
                  })}
                </div>

                {/* Second Photo Grid */}
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {story.gallery.slice(3).map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="group relative cursor-pointer overflow-hidden rounded-xl"
                    >
                      <img
                        src={img}
                        alt={`Gallery ${index + 4}`}
                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Author Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-16 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm"
              >
                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
                  <img
                    src={story.authorImage}
                    alt={story.author}
                    className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
                  />
                  <div>
                    <p className="text-muted-foreground mb-1 text-sm">
                      STORY BY
                    </p>
                    <h4 className="font-display text-foreground text-2xl font-bold">
                      {story.author}
                    </h4>
                    <p className="text-muted-foreground mt-3 max-w-2xl">
                      {story.category.includes("Gorilla")
                        ? "Wildlife conservationist with 15+ years documenting Rwanda's mountain gorillas. Passionate about community-led conservation."
                        : story.category.includes("Wildlife")
                          ? "Akagera National Park ranger turned conservation photographer. Documenting Rwanda's wildlife recovery since 2010."
                          : story.category.includes("Adventure")
                            ? "Nyungwe Forest guide and canopy walk pioneer. Leading forest adventures while promoting sustainable tourism."
                            : "Kigali-based cultural journalist exploring Rwanda's urban transformation through food, art, and nightlife."}
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-4 md:justify-start">
                      <span className="flex items-center gap-2 text-sm text-gray-600">
                        <Heart className="h-4 w-4 text-red-500" />
                        25+ Stories Published
                      </span>
                      <span className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        Based in Rwanda
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Stories */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="font-display text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                More Adventures from Rwanda
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Continue your journey with these inspiring stories
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {stories
                .filter((s) => s.id !== story.id)
                .slice(0, 3)
                .map((relatedStory) => (
                  <motion.div
                    key={relatedStory.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Link
                      to={`/stories/${relatedStory.id}`}
                      className="block h-full"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="h-full cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={relatedStory.image}
                            alt={relatedStory.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                              {relatedStory.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="font-display text-foreground mb-3 text-xl font-semibold transition-colors group-hover:text-green-700">
                            {relatedStory.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                            {relatedStory.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <img
                                src={relatedStory.authorImage}
                                alt={relatedStory.author}
                                className="h-8 w-8 rounded-full object-cover"
                              />
                              <span className="text-sm font-medium">
                                {relatedStory.author}
                              </span>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/stories"
                className="group inline-flex items-center rounded-full bg-green-600 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
              >
                View All Stories
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-gradient-to-r from-[#7c3aed] to-green-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display mb-4 text-3xl font-bold text-white">
            Ready for Your Own Story?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Experience Rwanda's wonders with Zoravia Terra Journeys. Every
            journey tells a story—let's write yours together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#7c3aed] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
          >
            Start Your Adventure
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-8 bottom-8 z-40 rounded-full bg-[#7c3aed] p-3 text-white shadow-lg transition-shadow hover:shadow-xl"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
}

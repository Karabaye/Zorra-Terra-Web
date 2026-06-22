import React, { useState, useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
    MapPin,
    Calendar,
    ArrowUpRight,
    X,
    CheckCircle2,
    ArrowRight,
    Clock,
    Phone,
    Info,
    Sparkles
} from "lucide-react";
import { shortEscapeTours } from "../utilities/shortEscapeTours";
import { eventsData } from "../utilities/eventsData";
import { Link } from "react-router-dom";


// ============================================================================
// REFINED 3D CARD COMPONENT
// ============================================================================

const RefinedTourCard3D = ({ tour, onClick, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    return (
        <Motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group cursor-pointer w-full h-full"
        >
            <Motion.div
                className="w-full h-full flex flex-col lg:flex-row overflow-hidden rounded-xl bg-[#031d3d] border border-white/[0.08] lg:h-[320px]"
                animate={isHovered ? { y: -5 } : { y: 0 }}
                style={{
                    boxShadow: isHovered
                        ? '0 30px 60px -12px rgba(0, 0, 0, 0.6)'
                        : '0 10px 20px -10px rgba(0, 0, 0, 0.4)'
                }}
            >
                {/* IMAGE */}
                <div className="relative h-64 lg:h-full lg:w-5/12 overflow-hidden shrink-0">
                    <Motion.div
                        className="absolute inset-0"
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src={tour.image}
                            alt={tour.title}
                            className="w-full h-full object-cover"
                        />
                    </Motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        <div className="px-2.5 py-1 rounded bg-white/5 backdrop-blur-xl border border-white/10 text-white text-[8px] font-semibold uppercase tracking-wider">
                            {tour.category || 'Experience'}
                        </div>
                        <div className="px-2.5 py-1 rounded bg-[#D4A574] text-black text-[8px] font-bold uppercase tracking-wider">
                            Premium
                        </div>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 p-5 lg:p-6 flex flex-col justify-between overflow-hidden">
                    <div className="space-y-3">
                        <h3 className="text-lg lg:text-xl font-light text-white leading-tight line-clamp-2 h-[3.5rem] lg:h-[3rem]">
                            {tour.title}
                        </h3>
                        {tour.tagline && (
                            <p className="text-xs text-white/40 font-light leading-relaxed line-clamp-2 h-[2.5rem]">
                                {tour.tagline}
                            </p>
                        )}
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/5 mt-auto">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <Calendar size={13} className="text-white/30" />
                                <span className="text-[11px] text-white/50">{tour.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={13} className="text-white/30" />
                                <span className="text-[11px] text-white/50">Rwanda</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[9px] text-white/30 uppercase font-bold tracking-wider mb-1">Pricing</p>
                                <p className="text-xl lg:text-2xl font-light text-white">{tour.cardPrice || tour.price}</p>
                            </div>
                            <div className="w-10 h-10 rounded-lg bg-[#D4A574] flex items-center justify-center text-black transition-transform group-hover:scale-110 shadow-lg shadow-[#D4A574]/10">
                                <ArrowUpRight size={18} strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>
                </div>
            </Motion.div>
        </Motion.div>
    );
};

// ============================================================================
// UPCOMING EVENTS COMPONENT
// ============================================================================

const UpcomingEvents = () => {
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [viewedImage, setViewedImage] = useState(null);
    const event = eventsData[currentEventIndex];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentEventIndex((prev) => (prev + 1) % eventsData.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 relative overflow-hidden bg-[#021732]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <AnimatePresence mode="wait">
                    <Motion.div
                        key={event.image}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.15, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <img
                            src={event.image}
                            alt=""
                            className="w-full h-full object-cover blur-2xl scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#021732] via-transparent to-[#021732]" />
                        <div className="absolute inset-0 bg-[#021732]/40" />
                    </Motion.div>
                </AnimatePresence>
            </div>

            <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl relative z-10">
                <div className="mb-16 text-center">
                    <Motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-light text-white leading-tight"
                    >
                        Upcoming <span className="text-white">Journeys</span>
                    </Motion.h2>
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 items-start">
                    <div className="lg:col-span-7 space-y-8 relative z-10">
                        <AnimatePresence mode="wait">
                            <Motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="space-y-8"
                            >
                                <div className="space-y-3">
                                    <Motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="inline-block"
                                    >
                                        <h4 className="text-[#D4A574] font-serif italic text-lg md:text-xl">
                                            {event.subtitle}
                                        </h4>
                                        <div className="h-[1px] w-full bg-gradient-to-r from-[#D4A574] to-transparent mt-1.5" />
                                    </Motion.div>

                                    <Motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-4xl md:text-5xl font-light text-white leading-tight"
                                    >
                                        {event.title}
                                    </Motion.h3>
                                </div>

                                <Motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl"
                                >
                                    {event.description}
                                </Motion.p>

                                <Motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12 pt-6"
                                >
                                    {[
                                        { label: 'Timeline', value: event.date, icon: Calendar },
                                        { label: 'Logistics', value: event.time, icon: Clock },
                                        { label: 'Investment', value: event.fees, icon: Info },
                                        { label: 'Reservations', value: event.transport, icon: Phone }
                                    ].map((item, idx) => (
                                        <div key={idx} className="space-y-3 group">
                                            <div className="flex items-center gap-3">
                                                <div className="w-px h-4 bg-[#D4A574] group-hover:h-6 transition-all duration-300" />
                                                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4A574] font-bold opacity-70">
                                                    {item.label}
                                                </span>
                                            </div>
                                            <p className="text-white text-lg md:text-xl font-light leading-snug tracking-wide">
                                                {item.value}
                                            </p>
                                        </div>
                                    ))}
                                </Motion.div>

                                <Motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="pt-6"
                                >
                                    <Link
                                        to="/booking"
                                        state={{ packageName: event.title }}
                                        className="group relative overflow-hidden px-10 py-4 rounded-lg bg-[#D4A574] text-[#021732] text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#D4A574]/90 hover:scale-[1.02] flex items-center gap-3 w-fit shadow-lg shadow-[#D4A574]/10"
                                    >
                                        <span className="relative z-10">Book Your Spot Now</span>
                                        <Motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="relative z-10"
                                        >
                                            <ArrowRight size={14} />
                                        </Motion.div>
                                    </Link>
                                </Motion.div>
                            </Motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <Motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/20 via-[#4a9eff]/10 to-transparent blur-3xl -z-10 scale-110" />

                            <div
                                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-white/[0.02] cursor-pointer group/img"
                                onClick={() => setViewedImage(event.image)}
                            >
                                <AnimatePresence mode="wait">
                                    <Motion.img
                                        key={event.image}
                                        src={event.image}
                                        alt={event.title}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="w-full h-full object-contain transition-transform duration-[5s] group-hover/img:scale-105"
                                    />
                                </AnimatePresence>

                                <div className="absolute inset-x-0 bottom-0 py-4 bg-gradient-to-t from-black/60 to-transparent flex justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                                    <span className="text-[10px] text-white uppercase tracking-widest font-medium">Click to View</span>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 sm:bottom-auto sm:-right-6 lg:-right-10 sm:top-1/2 sm:-translate-y-1/2 flex sm:flex-col gap-3 justify-center w-full sm:w-auto">
                                {eventsData.map((_, idx) => (
                                    <Motion.button
                                        key={idx}
                                        onClick={() => setCurrentEventIndex(idx)}
                                        className={`relative rounded-full transition-all duration-300 ${idx === currentEventIndex
                                            ? "w-10 sm:w-3 sm:h-10 h-3 bg-gradient-to-r from-[#D4A574] to-[#4a9eff]"
                                            : "w-3 h-3 bg-white/20 hover:bg-white/40"
                                            }`}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {idx === currentEventIndex && (
                                            <Motion.div
                                                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4A574] to-[#4a9eff] blur-md"
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        )}
                                    </Motion.button>
                                ))}
                            </div>
                        </Motion.div>

                        <Motion.div
                            className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#D4A574]/20 to-transparent blur-2xl pointer-events-none"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {viewedImage && (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
                    >
                        <Motion.div
                            className="absolute inset-0 bg-black/98 backdrop-blur-2xl"
                            onClick={() => setViewedImage(null)}
                        />

                        <Motion.div
                            initial={{ scale: 0.98, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.98, opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none"
                        >
                            <img
                                src={viewedImage}
                                alt="Exclusive Tour Detail"
                                className="max-w-full max-h-full object-contain shadow-[0_0_80px_rgba(0,0,0,0.5)] pointer-events-auto"
                            />
                        </Motion.div>

                        <Motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setViewedImage(null)}
                            className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 backdrop-blur-xl z-[210] group"
                            title="Close View"
                        >
                            <X size={28} className="transition-transform duration-300 group-hover:rotate-90" />
                        </Motion.button>
                    </Motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shimmer {
                    0% { background-position: -1000px 0; }
                    100% { background-position: 1000px 0; }
                }
                @keyframes pulse-glow {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }
                button, a {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                `
            }} />
        </section>
    );
};

// ============================================================================
// MAIN SHORT ESCAPE TOURS COMPONENT
// ============================================================================

import PageHero from "../components/PageHero";

const ShortEscapeTours = () => {
    const [selectedTour, setSelectedTour] = useState(null);
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["1-Day Tours", "2-Day Tours", "All"];

    const filteredTours = activeFilter === "All"
        ? shortEscapeTours
        : shortEscapeTours.filter(tour => tour.category === activeFilter);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) setSelectedTour(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    useEffect(() => {
        if (selectedTour) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [selectedTour]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.15 }
        }
    };

    return (
        <div className="bg-[#021732]">
            <div className="min-h-screen bg-[#021732] text-white selection:bg-white/10 overflow-x-hidden relative">

                {/* --- TOURS SHOWCASE SECTION --- */}
                <section className="relative z-20 pb-32 pt-20">
                    {/*
                      FIX: Added max-w-7xl + tighter responsive padding.
                      Old: container mx-auto px-6  → no max-width, content hugged left on wide screens.
                      New: container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl
                    */}
                    <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">

                       
                        <div className="mb-16">

                            {/* Tagline row — centered, full width */}
                            <Motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-light text-white leading-tight mb-8 text-center"
                            >
                                Big experiences. Little time. <br className="hidden md:block" /> Moments that tell a story.
                            </Motion.h2>

                            {/* Full-width divider */}
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4A574]/30 to-transparent mb-10" />

                            {/* Two-column body — copy left, Perfect For right */}
                            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-start">

                                {/* Left: intro paragraphs */}
                                <Motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="space-y-4"
                                >
                                    {[
                                        "Not everyone has weeks to travel but that doesn't mean you should miss out on Rwanda's magic.",
                                        "At Zoravia Terra Journeys, we design private, experience-led safaris and short escape tours in Rwanda for travelers who value comfort, authenticity, and meaningful connection.",
                                        "Whether you have one day or a full weekend, our journeys are crafted to give you deep, unhurried experiences not rushed itineraries. From wildlife safaris to mountain hikes and peaceful nature retreats, each escape is designed to feel personal and unforgettable.",
                                        "Every experience is led by licensed local guides and carefully planned around park regulations and permit availability; ensuring a seamless, safe, and responsible travel experience.",
                                    ].map((text, i) => (
                                        <Motion.p
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + i * 0.1 }}
                                            className="text-sm md:text-base text-white/60 leading-relaxed font-light"
                                        >
                                            {text}
                                        </Motion.p>
                                    ))}
                                </Motion.div>

                                {/* Right: Perfect For */}
                                <Motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="lg:pt-1"
                                >
                                    <p className="text-xs md:text-sm text-[#D4A574] font-medium uppercase tracking-[0.2em] mb-5">
                                        Perfect For
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                                        {[
                                            "Busy professionals",
                                            "Weekend adventurers",
                                            "Friends & couples",
                                            "Travelers adding Rwanda to a bigger Africa trip"
                                        ].map((item, index) => (
                                            <Motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + index * 0.08 }}
                                                className="flex items-center gap-3 p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.05] transition-all duration-300"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574] shrink-0" />
                                                <span className="text-sm text-white/55 font-light">{item}</span>
                                            </Motion.div>
                                        ))}
                                    </div>
                                </Motion.div>

                            </div>
                        </div>

                        {/* Featured Tours Title + Filter */}
                        <div className="mb-16 text-center">
                            <Motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-light text-white leading-tight mb-8"
                            >
                                Featured <span className="text-white">Tours</span>
                            </Motion.h2>
                            <div className="max-w-fit mx-auto p-2 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full flex gap-2 overflow-x-auto">
                                {filters.map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`relative px-6 md:px-8 py-2.5 md:py-3 text-[9px] md:text-[10px] font-medium uppercase tracking-[0.1em] transition-all duration-500 rounded-full flex-shrink-0 ${activeFilter === filter ? "text-[#021732]" : "text-white/40 hover:text-white/60"
                                            }`}
                                    >
                                        <span className="relative z-10">{filter}</span>
                                        {activeFilter === filter && (
                                            <Motion.div
                                                layoutId="activeFilterBg"
                                                className="absolute inset-0 bg-white/10 rounded-full"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tour Grid */}
                        <Motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12"
                        >
                            {filteredTours.map((tour, index) => (
                                <RefinedTourCard3D
                                    key={tour.id}
                                    tour={tour}
                                    onClick={() => setSelectedTour(tour)}
                                    index={index}
                                />
                            ))}
                        </Motion.div>
                    </div>
                </section>

                {/* --- UPCOMING EVENTS SECTION --- */}
                <UpcomingEvents />

                {/* --- DETAIL MODAL --- */}
                <AnimatePresence>
                    {selectedTour && (
                        <Motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center"
                        >
                            <Motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-[#021732]/95 backdrop-blur-2xl"
                                onClick={() => setSelectedTour(null)}
                            />

                            <Motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                                className="relative w-full h-full overflow-y-auto custom-scrollbar"
                            >
                                <button
                                    onClick={() => setSelectedTour(null)}
                                    className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
                                >
                                    <X size={20} />
                                </button>

                                <div className="container mx-auto px-4 md:px-6 py-12 lg:py-24">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

                                        {/* Left: Image */}
                                        <div className="lg:col-span-6 space-y-8 lg:space-y-12">
                                            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 group">
                                                <img
                                                    src={selectedTour.image}
                                                    alt={selectedTour.title}
                                                    className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#021732] via-transparent to-transparent opacity-40" />

                                                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                                                    <div className="p-4 md:p-6 rounded-lg bg-white/[0.05] backdrop-blur-2xl border border-white/10">
                                                        <p className="text-[8px] md:text-[10px] font-medium uppercase tracking-[0.1em] text-white/50 mb-1">Starting From</p>
                                                        <p className="text-2xl md:text-3xl font-light">{selectedTour.price}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-6 px-2 md:px-0">
                                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight" style={{ letterSpacing: '-0.02em' }}>
                                                    {selectedTour.tagline}
                                                </h2>
                                                <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                                                    {selectedTour.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Right: Details */}
                                        <div className="lg:col-span-6 space-y-10 lg:space-y-12">
                                            <div className="grid grid-cols-2 gap-4 md:gap-8">
                                                <div className="p-4 md:p-8 rounded-lg bg-white/[0.02] border border-white/5 space-y-2">
                                                    <p className="text-[9px] font-medium text-white/30 uppercase tracking-[0.1em]">Duration</p>
                                                    <p className="text-lg md:text-xl font-light">{selectedTour.duration}</p>
                                                </div>
                                                <div className="p-4 md:p-8 rounded-lg bg-white/[0.02] border border-white/5 space-y-2">
                                                    <p className="text-[9px] font-medium text-white/30 uppercase tracking-[0.1em]">Type</p>
                                                    <p className="text-lg md:text-xl font-light">Curated</p>
                                                </div>
                                            </div>

                                            {selectedTour.quickFacts && (
                                                <div className="p-8 rounded-lg bg-white/[0.02] border border-white/5 space-y-6">
                                                    <div className="grid grid-cols-1 gap-6">
                                                        {selectedTour.quickFacts.pickup && (
                                                            <div className="space-y-2">
                                                                <p className="text-[8px] font-medium text-white/20 uppercase tracking-[0.1em]">Pickup</p>
                                                                <p className="text-sm text-white/60">{selectedTour.quickFacts.pickup}</p>
                                                            </div>
                                                        )}
                                                        <div className="space-y-2">
                                                            <p className="text-[8px] font-medium text-white/20 uppercase tracking-[0.1em]">Travel Style</p>
                                                            <p className="text-sm text-white/60">{selectedTour.quickFacts.travelStyle}</p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <p className="text-[8px] font-medium text-white/20 uppercase tracking-[0.1em]">Group Size</p>
                                                            <p className="text-sm text-white/60">{selectedTour.quickFacts.groupSize}</p>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <p className="text-[8px] font-medium text-white/20 uppercase tracking-[0.1em]">Activity Level</p>
                                                            <p className="text-sm text-white/60">{selectedTour.quickFacts.activityLevel}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="space-y-8">
                                                <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">Itinerary</h4>

                                                <div className="space-y-6 relative">
                                                    <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-white/5" />

                                                    {selectedTour.itinerary.map((item, i) => (
                                                        <Motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                                            className="flex gap-8"
                                                        >
                                                            <div className="w-12 h-12 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0">
                                                                <span className="text-[10px] font-medium text-white/40">
                                                                    {item.time ? "0" + (i + 1) : `D${item.Day}`}
                                                                </span>
                                                            </div>
                                                            <div className="flex-1 border-b border-white/5 pb-4">
                                                                {item.time && <div className="text-[10px] text-white/30 font-medium mb-1 uppercase tracking-[0.05em]">{item.time}</div>}
                                                                <p className="text-base text-white/70">{item.activity}</p>
                                                            </div>
                                                        </Motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-8 pt-6 border-t border-white/5">
                                                {selectedTour.expectations && (
                                                    <div>
                                                        <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-4">What To Expect</h4>
                                                        <ul className="space-y-3">
                                                            {selectedTour.expectations.map((item, i) => (
                                                                <li key={i} className="flex items-center gap-2 text-sm text-white/50 font-light">
                                                                    <Sparkles size={14} className="text-white/30 flex-shrink-0" />
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                <div>
                                                    <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-4">Included</h4>
                                                    <ul className="space-y-3">
                                                        {selectedTour.inclusions.map((inc, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-sm text-white/50 font-light">
                                                                <CheckCircle2 size={14} className="text-white/30 flex-shrink-0" />
                                                                {inc}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {selectedTour.exclusions && (
                                                    <div>
                                                        <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-4">Not Included</h4>
                                                        <ul className="space-y-3">
                                                            {selectedTour.exclusions.map((exc, i) => (
                                                                <li key={i} className="flex items-center gap-2 text-sm text-white/30 font-light">
                                                                    <X size={14} className="text-white/20 flex-shrink-0" />
                                                                    {exc}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {selectedTour.optionalAddOns && (
                                                    <div>
                                                        <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-4">Optional Add-Ons</h4>
                                                        <ul className="space-y-3">
                                                            {selectedTour.optionalAddOns.map((item, i) => (
                                                                <li key={i} className="flex items-center gap-2 text-sm text-white/40 font-light">
                                                                    <Info size={14} className="text-white/20 flex-shrink-0" />
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {selectedTour.goodToKnow && (
                                                    <div>
                                                        <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 mb-4">Good To Know</h4>
                                                        <ul className="space-y-3">
                                                            {selectedTour.goodToKnow.map((item, i) => (
                                                                <li key={i} className="flex items-center gap-2 text-sm text-white/40 font-light">
                                                                    <Info size={14} className="text-white/20 flex-shrink-0" />
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex flex-col gap-3 pt-6 border-t border-white/5 pb-10">
                                                {selectedTour.bookingNote && (
                                                    <p className="text-sm text-white/40 font-light">
                                                        {selectedTour.bookingNote}
                                                    </p>
                                                )}
                                                <Link
                                                    to="/booking"
                                                    state={{ packageName: selectedTour.title }}
                                                    className="w-full py-4 md:py-5 rounded-lg bg-[#D4A574] text-[#021732] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-center hover:bg-[#D4A574]/90 transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#D4A574]/10"
                                                    onClick={() => setSelectedTour(null)}
                                                >
                                                    Request This Journey
                                                    <ArrowRight size={14} />
                                                </Link>
                                                <button
                                                    onClick={() => setSelectedTour(null)}
                                                    className="w-full py-4 md:py-5 rounded-lg border border-white/10 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] hover:bg-white/5 transition-all text-white"
                                                >
                                                    Back to Collection
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Motion.div>
                        </Motion.div>
                    )}
                </AnimatePresence>

                {/* --- CUSTOM JOURNEY CTA --- */}
                <section className="py-28 relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4A574]/4 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#021732] via-transparent to-[#021732]" />
                    </div>

                    <div className="container mx-auto px-6 md:px-10 lg:px-16 max-w-7xl relative z-10">
                        <Motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-4xl mx-auto rounded-2xl p-10 md:p-16 text-center border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
                        >

                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-light text-white leading-[1.2] tracking-[-0.01em] mb-6">
                                Looking for something different?
                            </h2>

                            <p className="text-sm md:text-[0.9375rem] text-white/45 font-light max-w-xl mx-auto leading-[1.8] mb-10">
                                If you have specific travel dates, unique interests, or a preferred style in mind — we'll craft a journey that's entirely yours.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/contact"
                                    className="group relative overflow-hidden px-10 py-4 rounded-lg bg-[#D4A574] text-[#021732] text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#D4A574]/90 hover:scale-[1.02] flex items-center gap-3 shadow-lg shadow-[#D4A574]/10"
                                >
                                    <span className="relative z-10">Design Your Journey</span>
                                    <ArrowRight size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>

                                <a
                                    href="tel:+250783482368"
                                    className="px-10 py-4 rounded-lg border border-white/[0.08] text-white/50 text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:border-white/15 hover:text-white/70 hover:scale-[1.02] flex items-center gap-3"
                                >
                                    <Phone size={13} />
                                    Speak With Us
                                </a>
                            </div>

                        </Motion.div>
                    </div>
                </section>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 5px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: rgba(255, 255, 255, 0.1);
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: rgba(255, 255, 255, 0.2);
                    }
                    `}}
                />
            </div>
        </div>
    );
};

export default ShortEscapeTours;
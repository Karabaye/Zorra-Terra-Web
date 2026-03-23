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
            {/* CLEAN MINIMAL CARD - ENFORCED TALLER UNIFORM HEIGHT */}
            <Motion.div
                className="w-full h-full flex flex-col lg:flex-row overflow-hidden rounded-xl bg-[#031d3d] border border-white/[0.08] lg:h-[320px]"
                animate={isHovered ? { y: -5 } : { y: 0 }}
                style={{
                    boxShadow: isHovered
                        ? '0 30px 60px -12px rgba(0, 0, 0, 0.6)'
                        : '0 10px 20px -10px rgba(0, 0, 0, 0.4)'
                }}
            >
                {/* IMAGE - 50% with fixed ratio/height */}
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

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        <div className="px-2.5 py-1 rounded bg-white/5 backdrop-blur-xl border border-white/10 text-white text-[8px] font-semibold uppercase tracking-wider">
                            {tour.category || 'Experience'}
                        </div>
                        <div className="px-2.5 py-1 rounded bg-[#D4A574] text-black text-[8px] font-bold uppercase tracking-wider">
                            Premium
                        </div>
                    </div>
                </div>

                {/* CONTENT - Fixed padding and flexible height within container */}
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

                    {/* Details & Price */}
                    <div className="space-y-4 pt-4 border-t border-white/5 mt-auto">
                        {/* Details */}
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

                        {/* Price & CTA */}
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[9px] text-white/30 uppercase font-bold tracking-wider mb-1">Pricing</p>
                                <p className="text-xl lg:text-2xl font-light text-white">{tour.price}</p>
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
// REDESIGNED UPCOMING EVENTS COMPONENT
// ============================================================================

const UpcomingEvents = () => {
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [viewedImage, setViewedImage] = useState(null);
    const event = eventsData[currentEventIndex];

    // Synchronized Auto-switch: Always changes Flyer + Text together
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentEventIndex((prev) => (prev + 1) % eventsData.length);
        }, 10000); // 10 seconds per flyer
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 relative overflow-hidden bg-[#021732]">
            {/* Dynamic Background Image */}
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

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <Motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-light text-white"
                    >
                        Upcoming <span className="text-[#D4A574]">Journeys</span>
                    </Motion.h2>
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 items-start">
                    {/* Event Content - Left side (7 cols) */}
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
                                {/* Title Area */}
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
                                        className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight"
                                    >
                                        {event.title}
                                    </Motion.h3>
                                </div>

                                {/* Description */}
                                <Motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl"
                                >
                                    {event.description}
                                </Motion.p>

                                {/* Redesigned Info Specs - Editorial Clean Look */}
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

                                {/* CTA Section */}
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

                    {/* Enhanced Image Showcase - Right side (5 cols) */}
                    <div className="lg:col-span-5 relative">
                        <Motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Decorative glow behind image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/20 via-[#4a9eff]/10 to-transparent blur-3xl -z-10 scale-110" />

                            {/* Small image container with zoom on click */}
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
                                        className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-105"
                                    />
                                </AnimatePresence>

                                <div className="absolute inset-x-0 bottom-0 py-4 bg-gradient-to-t from-black/60 to-transparent flex justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                                    <span className="text-[10px] text-white uppercase tracking-widest font-medium">Click to View</span>
                                </div>
                            </div>

                            {/* Enhanced Event Selector Dots */}
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

                        {/* Floating accent element */}
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

            {/* Professional Image Lightbox - Minimalist Design */}
            <AnimatePresence>
                {viewedImage && (
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Immersive Dark Backdrop */}
                        <Motion.div
                            className="absolute inset-0 bg-black/98 backdrop-blur-2xl"
                            onClick={() => setViewedImage(null)}
                        />

                        {/* Full Resolution Image Component */}
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

                        {/* Top-Right Action Control */}
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

            {/* Enhanced Custom Styles */}
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

                /* Smooth transitions for all interactive elements */
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

const ShortEscapeTours = () => {
    const [selectedTour, setSelectedTour] = useState(null);
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", "1-Day Tours", "2-Day Tours"];

    const filteredTours = activeFilter === "All"
        ? shortEscapeTours
        : shortEscapeTours.filter(tour => tour.category === activeFilter);

    // Close detail view on escape key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) setSelectedTour(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    // Prevent scroll when detail view is open
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


            {/* Main Content */}
            <div
                className="min-h-screen bg-[#021732] text-white selection:bg-white/10 overflow-x-hidden relative"
            >
                {/* --- HERO SECTION --- */}
                <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
                    {/* Hero image and simple overlay */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#021732]/80 via-transparent to-[#021732] z-10" />
                        <img
                            src="/assets/images/tura.PNG"
                            className="w-full h-full object-cover scale-110"
                            alt="Hero Background"
                        />
                    </div>

                    <div className="container mx-auto px-6 relative z-20 text-center">
                        <div className="space-y-8 max-w-5xl mx-auto">
                            <Motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="flex justify-center items-center gap-4 mb-4"
                            >
                                <div className="h-[1px] w-12 bg-white/20" />
                                <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-white/50">
                                    CURATED EXPERIENCES
                                </span>
                                <div className="h-[1px] w-12 bg-white/20" />
                            </Motion.div>

                            <div className="overflow-hidden py-2">
                                <Motion.h1
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                                    className="text-4xl md:text-7xl lg:text-9xl font-light leading-[1.1] md:leading-[0.9] tracking-tighter"
                                >
                                    Short <span className="text-white">Escapes</span>
                                </Motion.h1>
                            </div>

                            <Motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.6 }}
                                transition={{ duration: 1.5, delay: 0.8 }}
                                className="text-lg md:text-xl text-white/40 font-light max-w-3xl mx-auto leading-relaxed"
                            >
                                Discover moments that transform your perspective.
                            </Motion.p>

                            <Motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                                className="pt-10"
                            >
                                <Motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity }}
                                    className="w-[1px] h-20 bg-gradient-to-b from-white/20 via-white/10 to-transparent mx-auto"
                                />
                            </Motion.div>
                        </div>
                    </div>
                </section>

                {/* --- TOURS SHOWCASE SECTION --- */}
                <section className="relative z-20 -mt-24 pb-32">
                    <div className="container mx-auto px-6">
                        {/* Section Header */}
                        <div className="mb-16 text-center">
                            <Motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4"
                            >
                                Our Collection
                            </Motion.p>

                            {/* Introduction Section */}
                            <Motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="max-w-4xl mx-auto mb-12 space-y-6"
                            >
                                <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
                                    We design private, experience-led safaris in Rwanda for international travelers seeking quality, comfort, and authenticity. All experiences are operated with licensed local guides and curated for travelers who value thoughtful pacing over mass tourism.
                                </p>
                                <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
                                    All activities are scheduled according to park regulations and permit availability to ensure safety, conservation compliance, and the best possible experience.
                                </p>
                                <div className="pt-4 pb-2">
                                    <Motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="inline-flex flex-col gap-2 p-6 rounded-lg bg-white/[0.02] border border-white/10"
                                    >
                                        <p className="text-xs md:text-sm text-[#D4A574] font-medium">
                                            Want this experience tailored to your travel dates, interests, or accommodation style?
                                        </p>
                                        <p className="text-xs md:text-sm text-white/70 font-light">
                                            We customize all itineraries. Check availability for your dates.
                                        </p>
                                    </Motion.div>
                                </div>
                            </Motion.div>

                            <Motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl md:text-5xl font-light text-white"
                            >
                                Featured Tours
                            </Motion.h2>
                        </div>

                        {/* Filters */}
                        <div className="sticky top-24 z-50 mb-16">
                            <div className="container mx-auto px-6">
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
                                            </div>

                                            <div className="flex flex-col gap-3 pt-6 border-t border-white/5 pb-10">
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
                <section className="py-32 relative overflow-hidden">
                    {/* Background Decorative Elements */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A574]/5 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#021732] via-transparent to-[#021732]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <Motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-5xl mx-auto rounded-3xl p-12 md:p-20 text-center border border-white/[0.05] bg-white/[0.02] backdrop-blur-sm"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A574]/10 border border-[#D4A574]/20 text-[#D4A574] text-[10px] font-semibold uppercase tracking-widest mb-8">
                                <Sparkles size={12} />
                                <span>Bespoke Experiences</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-8">
                                Looking for <span className="text-[#D4A574]">Something Different?</span>
                            </h2>

                            <p className="text-lg md:text-xl text-white/50 font-light max-w-3xl mx-auto leading-relaxed mb-12">
                                Our collection represents our curated favorites. If you have specific travel dates, unique interests, or a preferred accommodation style in mind, we'd love to help create a journey that is entirely yours.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link
                                    to="/contact"
                                    className="group relative px-10 py-5 rounded-xl bg-[#D4A574] text-[#021732] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_20px_40px_-10px_rgba(212,165,116,0.3)] flex items-center gap-3"
                                >
                                    Design Your Bespoke Journey
                                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>

                                <a
                                    href="tel:+250783482368"
                                    className="px-8 py-5 rounded-xl border border-white/10 text-white/70 text-xs font-medium uppercase tracking-[0.15em] hover:bg-white/5 transition-all flex items-center gap-3"
                                >
                                    <Phone size={16} />
                                    Consult an Expert
                                </a>
                            </div>

                            <p className="mt-12 text-[11px] text-white/30 uppercase tracking-[0.3em] font-medium">
                                We customize all itineraries for
                                <span className="text-white/50 mx-2">•</span>
                                Individuals
                                <span className="text-white/50 mx-2">•</span>
                                Couples
                                <span className="text-white/50 mx-2">•</span>
                                Groups
                            </p>
                        </Motion.div>
                    </div>
                </section>

                {/* Custom Styles */}
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
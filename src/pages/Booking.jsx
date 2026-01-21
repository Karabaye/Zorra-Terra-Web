import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar,
    Users,
    MapPin,
    Check,
    ChevronRight,
    ChevronLeft,
    Send,
    Contact,
    User,
    Mail,
    Phone,
    Globe,
    FileText,
    MessageSquare,
    ClipboardList,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Booking = () => {
    const location = useLocation();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: "Mr",
        name: "",
        email: "",
        phone: "",
        nationality: "",
        activities: "",
        arrivalDate: "",
        departureDate: "",
        adults: 2,
        similarExperience: "No",
        experienceDetails: "",
        specialRequests: "",
        preferredContact: "Email"
    });

    // Automatically pre-fill the package if passed via state
    useEffect(() => {
        if (location.state?.packageName) {
            setFormData(prev => ({
                ...prev,
                activities: location.state.packageName
            }));
            // If a package is selected, we can skip directly to showing the detail view in step 2 if we wanted, 
            // but keeping it on step 1 is better for guest info collection first.
        }
    }, [location]);

    const totalSteps = 3;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Data:", formData);
        alert("Thank you! Your journey request has been sent. We will contact you shortly.");
        window.location.href = "/";
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    return (
        <div className="min-h-screen bg-[#021732] text-white pb-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#064a1b]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4ade80]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <section className="relative pt-40 pb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <motion.span
                                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                                animate={{ letterSpacing: "0.4em", opacity: 0.8 }}
                                transition={{ duration: 1.5 }}
                                className="text-[10px] font-bold uppercase text-[#4ade80] select-none"
                            >
                                Get In Touch
                            </motion.span>
                            <h1
                                className="text-7xl md:text-9xl font-light italic"
                                style={{ fontFamily: 'Dancing Script, cursive' }}
                            >
                                Booking&nbsp;<span className="text-white/20">Form</span>
                            </h1>
                        </div>
                        <p className="max-w-xl mx-auto text-white/60 font-light leading-relaxed">
                            Tell us about your dream trip, and we'll craft a personalized itinerary just for you.
                        </p>
                    </motion.div>
                </section>

                {/* Progress Bar */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="flex items-center justify-between relative">
                        {/* Line */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-white/10 -z-10" />

                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex flex-col items-center gap-2 bg-[#021732] px-2">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step >= s
                                        ? "border-[#4ade80] bg-[#4ade80] text-[#021732]"
                                        : "border-white/20 text-white/40"
                                        }`}
                                >
                                    {step > s ? <Check size={18} /> : <span>{s}</span>}
                                </div>
                                <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${step >= s ? "text-[#4ade80]" : "text-white/30"}`}>
                                    {s === 1 ? "Start" : s === 2 ? "Details" : "Review"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Card */}
                <motion.div
                    className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Subtle top gloss */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4ade80]/50 to-transparent opacity-50" />

                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait" custom={step}>

                            {/* Step 1: Personal Details */}
                            {step === 1 && (
                                <motion.div
                                    key={1}
                                    custom={1}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.4 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-light text-white">Guest Information</h3>
                                            <p className="text-sm text-white/50">Let's get to know you.</p>
                                        </div>

                                        {formData.activities && (
                                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#4ade80]/10 border border-[#4ade80]/20 animate-fade-in">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#4ade80]">
                                                    Booking: {formData.activities}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Title */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-[#4ade80]">Title</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                                <select
                                                    name="title"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#021732] border border-white/20 rounded-xl pl-12 pr-4 py-4 focus:border-[#4ade80] focus:outline-none transition-colors text-white appearance-none h-[58px]"
                                                >
                                                    <option>Mr</option>
                                                    <option>Mrs</option>
                                                    <option>Miss</option>
                                                    <option>Ms</option>
                                                    <option>Other</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <ChevronLeft className="rotate-270 text-white/30" size={16} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Full Name */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-[#4ade80]">Full Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#021732] border border-white/20 rounded-xl pl-12 pr-4 py-4 focus:border-[#4ade80] focus:outline-none transition-colors"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-[#4ade80]">Email</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#021732] border border-white/20 rounded-xl pl-12 pr-4 py-4 focus:border-[#4ade80] focus:outline-none transition-colors"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        {/* Phone/WhatsApp */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-[#4ade80]">Phone / WhatsApp</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#021732] border border-white/20 rounded-xl pl-12 pr-4 py-4 focus:border-[#4ade80] focus:outline-none transition-colors"
                                                    placeholder="+250..."
                                                />
                                            </div>
                                        </div>

                                        {/* Nationality */}
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-[#4ade80]">Nationality</label>
                                            <div className="relative">
                                                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                                <input
                                                    type="text"
                                                    name="nationality"
                                                    value={formData.nationality}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#021732] border border-white/20 rounded-xl pl-12 pr-4 py-4 focus:border-[#4ade80] focus:outline-none transition-colors"
                                                    placeholder="e.g. American, Rwandan, French"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Trip Details */}
                            {step === 2 && (
                                <motion.div
                                    key={2}
                                    custom={1}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.4 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-light text-white">Your Adventure Details</h3>
                                        <p className="text-sm text-white/50">Tell us what you want to experience.</p>
                                    </div>

                                    <div className="grid gap-6">
                                        {/* Activities */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-[#4ade80]">Activities You're Interested In</label>
                                            <textarea
                                                name="activities"
                                                value={formData.activities}
                                                onChange={handleChange}
                                                className="w-full bg-[#021732] border border-white/20 rounded-xl px-4 py-4 focus:border-[#4ade80] focus:outline-none transition-colors min-h-[80px]"
                                                placeholder="e.g. Gorilla Trekking, Safari, Hiking"
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Arrival Date */}
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-wider text-[#4ade80]">Arrival Date</label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                                    <input
                                                        type="date"
                                                        name="arrivalDate"
                                                        value={formData.arrivalDate}
                                                        onChange={handleChange}
                                                        className="w-full bg-[#021732] border border-white/20 rounded-xl pl-12 pr-4 py-4 focus:border-[#4ade80] focus:outline-none transition-colors text-white"
                                                    />
                                                </div>
                                            </div>

                                            {/* Departure Date */}
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-wider text-[#4ade80]">Departure Date</label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                                    <input
                                                        type="date"
                                                        name="departureDate"
                                                        value={formData.departureDate}
                                                        onChange={handleChange}
                                                        className="w-full bg-[#021732] border border-white/20 rounded-xl pl-12 pr-4 py-4 focus:border-[#4ade80] focus:outline-none transition-colors text-white"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Number of Adults */}
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-wider text-[#4ade80]">Number of Adults</label>
                                                <div className="relative">
                                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                                    <input
                                                        type="number"
                                                        name="adults"
                                                        min="1"
                                                        value={formData.adults}
                                                        onChange={handleChange}
                                                        className="w-full bg-[#021732] border border-white/20 rounded-xl pl-12 pr-4 py-4 focus:border-[#4ade80] focus:outline-none transition-colors"
                                                    />
                                                </div>
                                            </div>

                                            {/* Similar Experience */}
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-wider text-[#4ade80]">Prior Similar Travel?</label>
                                                <select
                                                    name="similarExperience"
                                                    value={formData.similarExperience}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#021732] border border-white/20 rounded-xl px-4 py-4 focus:border-[#4ade80] focus:outline-none transition-colors text-white appearance-none h-[58px]"
                                                >
                                                    <option>No</option>
                                                    <option>Yes</option>
                                                </select>
                                            </div>
                                        </div>

                                        {formData.similarExperience === "Yes" && (
                                            <div className="space-y-2 animate-fade-in">
                                                <label className="text-xs font-bold uppercase tracking-wider text-[#4ade80]">Tell us about it (Optional)</label>
                                                <input
                                                    type="text"
                                                    name="experienceDetails"
                                                    value={formData.experienceDetails}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#021732] border border-white/20 rounded-xl px-4 py-4 focus:border-[#4ade80] focus:outline-none transition-colors"
                                                    placeholder="Where did you go? What did you enjoy?"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Special Requests & Review */}
                            {step === 3 && (
                                <motion.div
                                    key={3}
                                    custom={1}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.4 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-light text-white">Final Touches</h3>
                                        <p className="text-sm text-white/50">Any special requirements or questions?</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Preferred Contact Method */}
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-[#4ade80]">Preferred Contact Method</label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                                <select
                                                    name="preferredContact"
                                                    value={formData.preferredContact}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#021732] border border-white/20 rounded-xl pl-12 pr-4 py-4 focus:border-[#4ade80] focus:outline-none transition-colors text-white appearance-none h-[58px]"
                                                >
                                                    <option>Email</option>
                                                    <option>Phone</option>
                                                    <option>WhatsApp</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-[#4ade80]">Special Requests / Notes</label>
                                            <textarea
                                                name="specialRequests"
                                                value={formData.specialRequests}
                                                onChange={handleChange}
                                                className="w-full bg-[#021732] border border-white/20 rounded-xl px-4 py-4 focus:border-[#4ade80] focus:outline-none transition-colors min-h-[100px]"
                                                placeholder="Dietary restrictions, preferred guide language, specific accommodation types..."
                                            />
                                        </div>
                                    </div>

                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <h4 className="text-sm font-bold text-[#4ade80] uppercase tracking-wider mb-4">Summary</h4>
                                        <ul className="space-y-2 text-sm text-white/70">
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Guest:</span> <span className="text-white">{formData.title} {formData.name}</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Contact:</span> <span className="text-white">{formData.preferredContact} ({formData.email})</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Dates:</span> <span className="text-white">{formData.arrivalDate || 'Not set'} to {formData.departureDate || 'Not set'}</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Travelers:</span> <span className="text-white">{formData.adults} Adults</span>
                                            </li>
                                            <li className="flex justify-between border-b border-white/5 pb-2">
                                                <span>Journey:</span> <span className="text-white text-right ml-4 line-clamp-1">{formData.activities || 'Custom Blueprint'}</span>
                                            </li>
                                        </ul>
                                    </div>

                                </motion.div>
                            )}

                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-12 pt-6 border-t border-white/10">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest"
                                >
                                    <ChevronLeft size={16} /> Back
                                </button>
                            ) : <div />}

                            {step < totalSteps ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="btn-primary flex items-center gap-2"
                                >
                                    Next Step <ChevronRight size={16} />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="btn-primary flex items-center gap-2 !bg-[#4ade80] !text-[#021732] hover:!bg-white"
                                >
                                    Submit Request <Send size={16} />
                                </button>
                            )}
                        </div>

                    </form>
                </motion.div>

            </div>
        </div>
    );
};

export default Booking;

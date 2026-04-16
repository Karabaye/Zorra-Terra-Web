import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
    Calendar,
    Users,
    Check,
    ChevronRight,
    ChevronLeft,
    Send,
    User,
    Mail,
    Phone,
    Globe,
    MessageSquare,
    ClipboardList
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

const ALL_COUNTRIES = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
    "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Holy See", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
    "Vanuatu", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
];

import PageHero from "../components/PageHero";

const Booking = () => {
    const location = useLocation();
    const [step, setStep] = useState(1);
    const [showCountryList, setShowCountryList] = useState(false);
    const [countrySearch, setCountrySearch] = useState("");
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

    useEffect(() => {
        if (location.state?.packageName) {
            setFormData(prev => ({
                ...prev,
                activities: location.state.packageName
            }));
        }
    }, [location]);

    const totalSteps = 3;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateStep = () => {
        if (step === 1) {
            const { name, email, phone, nationality } = formData;
            if (!name || !email || !phone || !nationality) {
                toast.error("Please fill in all guest details before continuing.");
                return false;
            }
            // Block simple "fake" email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                toast.error("Please enter a valid, real email address.");
                return false;
            }
        } else if (step === 2) {
            const { activities, arrivalDate, departureDate } = formData;
            if (!activities || !arrivalDate || !departureDate) {
                toast.error("Please select your activities and dates.");
                return false;
            }

            // Check if departure is after arrival
            if (new Date(departureDate) < new Date(arrivalDate)) {
                toast.error("Departure date cannot be before arrival date.");
                return false;
            }
        }
        return true;
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep((prev) => Math.min(prev + 1, totalSteps));
        }
    };

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const loadingToast = toast.loading('Preparing your journey request...');

        try {
            const response = await fetch('https://formspree.io/f/xbdzkrwn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            toast.dismiss(loadingToast);

            // Premium personalized toast
            toast.success((t) => (
                <div className="flex flex-col gap-1 py-1">
                    <div className="flex items-center gap-2">
                        <span className="text-[#D4A574] font-bold text-sm tracking-wide">Submission Successful</span>
                    </div>
                    <p className="text-white/80 text-xs font-light leading-relaxed">
                        Thank you, <span className="text-[#D4A574] font-medium">{formData.name}</span>! <br />
                        Your journey request has been sent to our inbox.
                    </p>
                </div>
            ), {
                duration: 6000,
                icon: '✨',
            });

            // Delay redirect to allow user to see the message
            setTimeout(() => {
                window.location.href = "/";
            }, 3000);

        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error(error.message || 'Payment/Submission failed. Please check your connection.', {
                duration: 6000,
                style: {
                    background: '#2a1a1a',
                    color: '#ff8a8a',
                    border: '1px solid #ff4b4b'
                }
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const slideVariants = {
        enter: (direction) => ({ x: direction > 0 ? 30 : -30, opacity: 0 }),
        center: { zIndex: 1, x: 0, opacity: 1 },
        exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 30 : -30, opacity: 0 })
    };

    return (
        <div className="min-h-screen bg-[#021732] text-white pb-24 relative overflow-hidden">
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <Motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] -left-[10%] w-[50%] aspect-square bg-[#D4A574]/10 rounded-full blur-[140px]"
                />
                <Motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-[10%] -right-[10%] w-[50%] aspect-square bg-[#C4A57B]/5 rounded-full blur-[140px]"
                />

                {/* Topographic Pattern Overlay (Subtle) */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10c20 0 20 20 40 20s20-20 40-20 20 20 40 20 20-20 40-20' stroke='%234ade80' fill='none' fill-rule='evenodd' opacity='0.5'/%3E%3C/svg%3E")` }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
            <PageHero 
                title="Booking" 
                subtitle="Begin Your Journey" 
                description="Tell us about your dream trip, and we'll craft a personalized itinerary just for you." 
            />

                {/* Progress Bar - Elegant "Route" Design */}
                <div className="max-w-2xl mx-auto mb-12 md:mb-20 px-2 md:px-6">
                    <div className="flex items-center justify-between relative">
                        {/* Background Path */}
                        <div className="absolute left-0 top-[18px] w-full h-[2px] bg-white/5" />

                        {/* Active Path Glow */}
                        <Motion.div
                            className="absolute left-0 top-[18px] h-[2px] bg-gradient-to-r from-[#D4A574] to-[#C4A57B] z-10"
                            initial={{ width: "0%" }}
                            animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            style={{ boxShadow: "0 0 15px rgba(74, 222, 128, 0.3)" }}
                        />

                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex flex-col items-center gap-5 relative z-20">
                                <Motion.div
                                    animate={{
                                        scale: step === s ? 1.2 : 1,
                                        backgroundColor: step >= s ? "#D4A574" : "rgba(255,255,255,0.05)",
                                        borderColor: step >= s ? "rgba(74, 222, 128, 0.5)" : "rgba(255,255,255,0.1)"
                                    }}
                                    className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center border transition-all duration-500 ${step >= s ? "text-[#021732]" : "text-white/20"
                                        }`}
                                    style={{
                                        boxShadow: step === s ? "0 0 25px rgba(74, 222, 128, 0.4)" : "none"
                                    }}
                                >
                                    {step > s ? (
                                        <Check size={14} strokeWidth={3} />
                                    ) : (
                                        <span className="text-[11px] md:text-[12px] font-bold">{s}</span>
                                    )}
                                </Motion.div>

                                <div className="flex flex-col items-center">
                                    <span className={`text-[9px] font-bold uppercase tracking-[0.4em] transition-colors duration-500 ${step >= s ? "text-[#D4A574]" : "text-white/20"
                                        }`}>
                                        {s === 1 ? "Guest" : s === 2 ? "Trip" : "Finish"}
                                    </span>
                                    {step === s && (
                                        <Motion.div
                                            layoutId="activeIndicator"
                                            className="w-1 h-1 bg-[#D4A574] rounded-full mt-2 shadow-[0_0_8px_#D4A574]"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Form Card */}
                <Motion.div
                    layout
                    className="max-w-2xl mx-auto bg-[#031d3d]/40 backdrop-blur-3xl border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative Ambient Glow */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4A574]/5 rounded-full blur-[80px]" />

                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait" custom={step}>
                            {/* Step 1: Guest Information */}
                            {step === 1 && (
                                <Motion.div key={1} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5 }} className="space-y-10 pb-20">
                                    <div className="flex items-center gap-3 md:gap-4 pb-6 border-b border-white/5">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#D4A574]/10 flex items-center justify-center text-[#D4A574] border border-[#D4A574]/20">
                                            <User size={18} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-light">Guest Information</h3>
                                            <p className="text-[8px] md:text-[9px] text-[#D4A574]/40 uppercase tracking-[0.3em] font-bold mt-1">Primary Traveler Details</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-bold uppercase text-white/30 tracking-[0.2em] ml-1">Title *</label>
                                            <div className="relative group">
                                                <select name="title" value={formData.title} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-[#D4A574]/50 outline-none appearance-none transition-all hover:bg-white/[0.07]">
                                                    <option value="Mr" className="bg-[#021732]">Mr</option>
                                                    <option value="Mrs" className="bg-[#021732]">Mrs</option>
                                                    <option value="Miss" className="bg-[#021732]">Miss</option>
                                                    <option value="Ms" className="bg-[#021732]">Ms</option>
                                                    <option value="Other" className="bg-[#021732]">Other</option>
                                                </select>
                                                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none group-hover:text-white/40 transition-colors" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[9px] font-bold uppercase text-white/30 tracking-[0.2em] ml-1">Full Name *</label>
                                            <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-[#D4A574]/50 outline-none transition-all hover:bg-white/[0.07] placeholder:text-white/10" placeholder="Identity" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[9px] font-bold uppercase text-white/30 tracking-[0.2em] ml-1">Email *</label>
                                            <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-[#D4A574]/50 outline-none transition-all hover:bg-white/[0.07] placeholder:text-white/10" placeholder="Connection" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[9px] font-bold uppercase text-white/30 tracking-[0.2em] ml-1">Phone / WhatsApp *</label>
                                            <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-[#D4A574]/50 outline-none transition-all hover:bg-white/[0.07] placeholder:text-white/10" placeholder="+250 783 482 368" />
                                        </div>

                                        <div className="space-y-2 md:col-span-2 relative">
                                            <label className="text-[9px] font-bold uppercase text-white/30 tracking-[0.2em] ml-1">Nationality *</label>
                                            <div className="relative group">
                                                <div
                                                    onClick={() => setShowCountryList(!showCountryList)}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-10 py-3 text-xs focus:border-[#D4A574]/50 hover:bg-white/[0.07] transition-all cursor-pointer flex items-center justify-between"
                                                >
                                                    <Globe size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-white/40 transition-colors z-10" />
                                                    <span className={formData.nationality ? "text-white/70" : "text-white/20"}>
                                                        {formData.nationality || "Select your country"}
                                                    </span>
                                                    <ChevronDown size={14} className={`text-white/20 transition-transform duration-300 ${showCountryList ? "rotate-180" : ""}`} />
                                                </div>

                                                <AnimatePresence>
                                                    {showCountryList && (
                                                        <Motion.div
                                                            initial={{ opacity: 0, scaleY: 0.9, originY: 0 }}
                                                            animate={{ opacity: 1, scaleY: 1 }}
                                                            exit={{ opacity: 0, scaleY: 0.9 }}
                                                            className="absolute left-0 right-0 top-full mt-2 z-[100] bg-[#031d3d] border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-3xl"
                                                            style={{ maxHeight: "300px" }}
                                                        >
                                                            {/* Search Bar */}
                                                            <div className="p-3 border-b border-white/5 bg-white/[0.02]">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search country..."
                                                                    value={countrySearch}
                                                                    onChange={(e) => setCountrySearch(e.target.value)}
                                                                    className="w-full bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-[11px] outline-none focus:border-[#D4A574]/30"
                                                                    onClick={(e) => e.stopPropagation()}
                                                                />
                                                            </div>

                                                            {/* Country List */}
                                                            <div className="overflow-y-auto max-h-[220px] custom-scrollbar">
                                                                {ALL_COUNTRIES
                                                                    .filter(c => c.toLowerCase().includes(countrySearch.toLowerCase()))
                                                                    .map((country) => (
                                                                        <div
                                                                            key={country}
                                                                            onClick={() => {
                                                                                setFormData(prev => ({ ...prev, nationality: country }));
                                                                                setShowCountryList(false);
                                                                                setCountrySearch("");
                                                                            }}
                                                                            className="px-4 py-2.5 text-[11px] text-white/60 hover:text-white hover:bg-white/5 cursor-pointer transition-all border-b border-white/[0.02] last:border-0"
                                                                        >
                                                                            {country}
                                                                        </div>
                                                                    ))}
                                                                {ALL_COUNTRIES.filter(c => c.toLowerCase().includes(countrySearch.toLowerCase())).length === 0 && (
                                                                    <div className="px-4 py-8 text-center text-white/20 text-[10px] italic">
                                                                        No countries found matching your search
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </Motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Click outside to close (Invisible layer) */}
                                            {showCountryList && (
                                                <div
                                                    className="fixed inset-0 z-[90]"
                                                    onClick={() => setShowCountryList(false)}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </Motion.div>
                            )}

                            {/* Step 2: Adventure Details */}
                            {step === 2 && (
                                <Motion.div key={2} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5 }} className="space-y-10">
                                    <div className="flex items-center gap-3 md:gap-4 pb-6 border-b border-white/5">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#D4A574]/10 flex items-center justify-center text-[#D4A574] border border-[#D4A574]/20">
                                            <Calendar size={18} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-light">Adventure Details</h3>
                                            <p className="text-[8px] md:text-[9px] text-[#D4A574]/40 uppercase tracking-[0.3em] font-bold mt-1">Journey Preferences</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-bold uppercase text-white/30 tracking-[0.2em] ml-1">Activities You're Interested In *</label>
                                            <textarea required name="activities" value={formData.activities} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-xs focus:border-[#D4A574]/50 outline-none transition-all hover:bg-white/[0.07] min-h-[100px] resize-none placeholder:text-white/10 leading-relaxed" placeholder="e.g. Gorilla Trekking, Safari, City Tours..." />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[9px] font-bold uppercase text-white/30 tracking-[0.2em] ml-1">Arrival Date *</label>
                                                <input required type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-[#D4A574]/50 outline-none transition-all hover:bg-white/[0.07] text-white/70" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[9px] font-bold uppercase text-white/30 tracking-[0.2em] ml-1">Departure Date *</label>
                                                <input required type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-[#D4A574]/50 outline-none transition-all hover:bg-white/[0.07] text-white/70" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[9px] font-bold uppercase text-white/30 tracking-[0.2em] ml-1">Number of Adults *</label>
                                                <div className="relative group">
                                                    <Users size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-white/40 transition-colors" />
                                                    <input required type="number" name="adults" min="1" value={formData.adults} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-xs focus:border-[#D4A574]/50 outline-none transition-all hover:bg-white/[0.07]" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[9px] font-bold uppercase text-white/30 tracking-[0.2em] ml-1">Prior Similar Travels?</label>
                                                <div className="relative group">
                                                    <select name="similarExperience" value={formData.similarExperience} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-[#D4A574]/50 outline-none appearance-none transition-all hover:bg-white/[0.07]">
                                                        <option value="No" className="bg-[#021732]">No</option>
                                                        <option value="Yes" className="bg-[#021732]">Yes</option>
                                                    </select>
                                                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none group-hover:text-white/40 transition-colors" />
                                                </div>
                                            </div>
                                        </div>

                                        {formData.similarExperience === "Yes" && (
                                            <Motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-2 pt-2">
                                                <label className="text-[9px] font-bold uppercase text-white/30 tracking-[0.2em] ml-1">Short Experience Details</label>
                                                <input type="text" name="experienceDetails" value={formData.experienceDetails} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-[#D4A574]/50 outline-none transition-all hover:bg-white/[0.07] placeholder:text-white/10" placeholder="e.g. Previous Safaris in Kenya..." />
                                            </Motion.div>
                                        )}
                                    </div>
                                </Motion.div>
                            )}

                            {/* Step 3: Special Requests & Review */}
                            {step === 3 && (
                                <Motion.div key={3} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5 }} className="space-y-10">
                                    <div className="flex items-center gap-3 md:gap-4 pb-6 border-b border-white/5">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#D4A574]/10 flex items-center justify-center text-[#D4A574] border border-[#D4A574]/20">
                                            <ClipboardList size={18} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-light">Final Details</h3>
                                            <p className="text-[8px] md:text-[9px] text-[#D4A574]/40 uppercase tracking-[0.3em] font-bold mt-1">Review & Preferences</p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-bold uppercase text-white/30 tracking-[0.2em] ml-1">Preferred Contact Method *</label>
                                            <div className="relative group">
                                                <MessageSquare size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-white/40 transition-colors" />
                                                <select name="preferredContact" value={formData.preferredContact} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-xs focus:border-[#D4A574]/50 outline-none appearance-none transition-all hover:bg-white/[0.07]">
                                                    <option value="Email" className="bg-[#021732]">Email</option>
                                                    <option value="Phone" className="bg-[#021732]">Phone</option>
                                                    <option value="WhatsApp" className="bg-[#021732]">WhatsApp</option>
                                                </select>
                                                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none group-hover:text-white/40 transition-colors" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[9px] font-bold uppercase text-white/30 tracking-[0.2em] ml-1">Special Requests (Optional)</label>
                                            <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-xs focus:border-[#D4A574]/50 outline-none transition-all hover:bg-white/[0.07] min-h-[100px] resize-none placeholder:text-white/10 leading-relaxed" placeholder="Dietary needs, preferences, or questions..." />
                                        </div>

                                        <div className="p-6 bg-[#D4A574]/5 rounded-[1.5rem] border border-[#D4A574]/10">
                                            <h4 className="text-[8px] font-bold text-[#D4A574] uppercase tracking-[0.4em] mb-4">Journey Summary</h4>
                                            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-[10px] tracking-wide">
                                                <div>
                                                    <div className="text-white/20 uppercase text-[7px] font-bold tracking-widest mb-1">Lead Guest</div>
                                                    <div className="text-white/80 font-medium">{formData.title} {formData.name || '---'}</div>
                                                </div>
                                                <div>
                                                    <div className="text-white/20 uppercase text-[7px] font-bold tracking-widest mb-1">Group Size</div>
                                                    <div className="text-white/80 font-medium">{formData.adults} Adults</div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="text-white/20 uppercase text-[7px] font-bold tracking-widest mb-1">Selected Experiences</div>
                                                    <div className="text-white/80 font-medium line-clamp-1">{formData.activities || 'Custom Adventure'}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/5">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="text-white/30 hover:text-white transition-all uppercase text-[9px] font-bold tracking-[0.3em] flex items-center gap-3 group"
                                >
                                    <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1.5" />
                                    Back
                                </button>
                            ) : <div />}

                            <div className="relative group">
                                {/* Button Shine Effect Layer */}
                                <div className="absolute -inset-4 bg-[#D4A574]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <button
                                    type={step === totalSteps ? "submit" : "button"}
                                    onClick={step === totalSteps ? null : nextStep}
                                    disabled={isSubmitting && step === totalSteps}
                                    className={`relative flex items-center gap-4 md:gap-6 px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#D4A574] to-[#C4A57B] text-[#021732] text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 active:scale-95 ${(isSubmitting && step === totalSteps) ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    <span className="relative z-10 flex items-center gap-2 md:gap-3">
                                        {step === totalSteps ? (isSubmitting ? "Processing..." : "Submit Request") : "Continue"}
                                        {step === totalSteps ? <Send size={14} md:size={16} strokeWidth={2.5} className={(isSubmitting && step === totalSteps) ? 'animate-pulse' : ''} /> : <ChevronRight size={14} md:size={16} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform duration-300" />}
                                    </span>
                                    {/* Premium Shine Overlay */}
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                </button>
                            </div>
                        </div>
                    </form>
                </Motion.div>
            </div>
        </div>
    );
};

const ChevronDown = ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

export default Booking;

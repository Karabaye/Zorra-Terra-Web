import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Send, Instagram, Facebook, Linkedin } from "lucide-react";
import { toast } from "react-hot-toast";
import { trackContactSubmit } from "../utilities/analytics";

import PageHero from "../components/PageHero";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const loadingToast = toast.loading('Verifying your details...');

        try {
            const response = await fetch('https://formspree.io/f/mvzwqply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Validation failed');
            }

            toast.dismiss(loadingToast);
            trackContactSubmit();

            // Premium personalized toast
            toast.success(() => (
                <div className="flex flex-col gap-1 py-1">
                    <div className="flex items-center gap-2">
                        <span className="text-[#D4A574] font-bold text-sm tracking-wide">Message Delivered</span>
                    </div>
                    <p className="text-white/80 text-xs font-light leading-relaxed">
                        Thank you, <span className="text-[#D4A574] font-medium">{formData.name}</span>! <br />
                        Your inquiry has reached our inbox. We'll be in touch soon.
                    </p>
                </div>
            ), {
                duration: 6000,
                icon: '📬',
            });

            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            toast.dismiss(loadingToast);
            toast.error(error.message || 'Something went wrong. Please try again.', {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-[#021732] text-white selection:bg-[#D4A574]/30 selection:text-white overflow-x-hidden">
            
            <section className="pb-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">

                    <Motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[2rem] border border-white/5 bg-[#031d3d]/30 shadow-2xl"
                    >

                        {/* Left Column: Pristine Image */}
                        <div className="relative group overflow-hidden h-full min-h-[300px] md:min-h-[400px]">
                            <Motion.img
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                                src="/assets/Akagera/DSC09361.jpeg"
                                alt="Rwanda Nature"
                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#021732]/40 to-transparent" />
                        </div>

                        {/* Right Column: Refined Form Column */}
                        <div className="p-6 md:p-10 relative bg-[#021732]/50 backdrop-blur-3xl">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4A574]/5 blur-[80px] pointer-events-none" />

                            <div className="space-y-8 relative z-10">
                                {/* Compact Header for the form side */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
                                    <div className="space-y-1">
                                        <h1 className="text-4xl md:text-5xl font-light text-white leading-tight">
                                            Direct <span className="text-white">Details</span>
                                        </h1>
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-white/20">Connect with Zoravia</p>
                                    </div>
                                    <div className="flex gap-3">
                                        {[
                                            { icon: Instagram, href: "https://instagram.com/zoraviaterrajourneys", label: "Instagram" },
                                            { icon: Facebook, href: "https://facebook.com/zoraviaterrajourneys", label: "Facebook" },
                                            { icon: Linkedin, href: "https://linkedin.com/company/zoraviaterrajourneys", label: "LinkedIn" },
                                        ].map((item, i) => {
                                            const Icon = item.icon;
                                            return (
                                                <a
                                                    key={i}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={item.label}
                                                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4A574] hover:text-[#021732] transition-all duration-500"
                                                >
                                                    <Icon size={14} />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Invisible Honeypot for Bot Spam Prevention */}
                                    <input
                                        type="text"
                                        name="_gotcha"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        style={{ display: "none" }}
                                        aria-hidden="true"
                                    />

                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-name" className="text-[9px] font-black uppercase tracking-widest text-[#D4A574] ml-1">Full Name *</label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            maxLength={100}
                                            aria-required="true"
                                            className="w-full bg-[#021732] border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/10 focus:border-[#D4A574] transition-all outline-none"
                                            placeholder="Identity"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="contact-email" className="text-[9px] font-black uppercase tracking-widest text-[#D4A574] ml-1">Email *</label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                maxLength={120}
                                                aria-required="true"
                                                className="w-full bg-[#021732] border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/10 focus:border-[#D4A574] transition-all outline-none"
                                                placeholder="Connection"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="contact-phone" className="text-[9px] font-black uppercase tracking-widest text-[#D4A574] ml-1">Phone Number</label>
                                            <input
                                                id="contact-phone"
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                maxLength={30}
                                                className="w-full bg-[#021732] border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/10 focus:border-[#D4A574] transition-all outline-none"
                                                placeholder="Reach"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="contact-message" className="text-[9px] font-black uppercase tracking-widest text-[#D4A574] ml-1">Your Message *</label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            maxLength={3000}
                                            aria-required="true"
                                            rows={3}
                                            className="w-full bg-[#021732] border border-white/10 rounded-[1.5rem] px-5 py-3 text-sm text-white placeholder:text-white/10 focus:border-[#D4A574] transition-all outline-none resize-none"
                                            placeholder="Share your travel intentions..."
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`group relative flex items-center gap-6 px-10 py-4 rounded-full bg-[#D4A574] text-[#021732] text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            <span className="relative z-10 flex items-center gap-3">
                                                {isSubmitting ? 'Verifying...' : 'Send Message'}
                                                <Send size={14} className={`${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1.5'} transition-transform duration-300`} />
                                            </span>
                                        </button>
                                        <p className="mt-4 text-[9px] text-white/20 italic tracking-widest uppercase">Typical response time: Under 2 Hours</p>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </Motion.div>
                </div>
            </section>
        </div>
    );
}

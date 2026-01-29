import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Send, Instagram, Facebook, Linkedin } from "lucide-react";
import { toast } from "react-hot-toast";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Premium personalized toast
        toast.success((t) => (
            <div className="flex flex-col gap-1 py-1">
                <div className="flex items-center gap-2">
                    <span className="text-[#D4A574] font-bold text-sm tracking-wide">Message Received</span>
                </div>
                <p className="text-white/80 text-xs font-light leading-relaxed">
                    Thank you, <span className="text-[#D4A574] font-medium">{formData.name}</span>! <br />
                    We've received your message and will reach out shortly.
                </p>
            </div>
        ), {
            duration: 5000,
            icon: '✨',
        });

        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-[#021732] text-white selection:bg-[#D4A574]/30 selection:text-white overflow-x-hidden">

            <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">

                    {/* Simple Title Above The Card */}
                    <Motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-light italic text-white" style={{ fontFamily: "var(--title-font)" }}>
                            Contact <span className="text-[#D4A574]">Us</span>
                        </h1>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[2rem] border border-white/5 bg-[#031d3d]/30 shadow-2xl"
                    >

                        {/* Left Column: Pristine Image */}
                        <div className="relative group overflow-hidden h-full min-h-[400px]">
                            <Motion.img
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                                src="/assets/images/conso.jpg"
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
                                        <h2 className="text-2xl font-light">
                                            Direct <span className="text-[#D4A574] italic" style={{ fontFamily: "var(--title-font)" }}>Details</span>
                                        </h2>
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-white/20">Connect with Zoravia</p>
                                    </div>
                                    <div className="flex gap-3">
                                        {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                            <button key={i} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4A574] hover:text-[#021732] transition-all duration-500">
                                                <Icon size={14} />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-[#D4A574] ml-1">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-[#021732] border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/10 focus:border-[#D4A574] transition-all outline-none"
                                                placeholder="Identity"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-[#D4A574] ml-1">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-[#021732] border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/10 focus:border-[#D4A574] transition-all outline-none"
                                                placeholder="Connection"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-[#D4A574] ml-1">Your Message *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={3}
                                            className="w-full bg-[#021732] border border-white/10 rounded-[1.5rem] px-5 py-3 text-sm text-white placeholder:text-white/10 focus:border-[#D4A574] transition-all outline-none resize-none"
                                            placeholder="Share your travel intentions..."
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="group relative flex items-center gap-6 px-10 py-4 rounded-full bg-[#D4A574] text-[#021732] text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 active:scale-95"
                                        >
                                            <span className="relative z-10 flex items-center gap-3">
                                                Send Message
                                                <Send size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
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

            {/* Branded Footer Micro-Detail */}
            <section className="py-12 text-center opacity-30">
                <p className="text-[10px] font-bold uppercase tracking-[1em] text-white">Zoravia Terra Journeys Ltd </p>
            </section>

        </div>
    );
}

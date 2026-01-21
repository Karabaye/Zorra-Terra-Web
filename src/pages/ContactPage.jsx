import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Send, Instagram, Facebook, Linkedin } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We'll contact you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-[#021732] text-white selection:bg-[#4ade80]/30 selection:text-white overflow-x-hidden">

            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-7xl">

                    {/* Simple Title Above The Card */}
                    <Motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-light italic text-white" style={{ fontFamily: "Dancing Script, cursive" }}>
                            Contact <span className="text-[#4ade80]">Us</span>
                        </h1>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[3rem] border border-white/5 bg-[#031d3d]/30 shadow-2xl"
                    >

                        {/* Left Column: Pristine Image */}
                        <div className="relative group overflow-hidden h-full min-h-[500px]">
                            <Motion.img
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                                src="/assets/imgs/conso.jpg"
                                alt="Rwanda Nature"
                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#021732]/40 to-transparent" />
                        </div>

                        {/* Right Column: Refined Form Column */}
                        <div className="p-8 md:p-14 relative bg-[#021732]/50 backdrop-blur-3xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ade80]/5 blur-[100px] pointer-events-none" />

                            <div className="space-y-10 relative z-10">
                                {/* Compact Header for the form side */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/5">
                                    <div className="space-y-1">
                                        <h2 className="text-3xl font-light">
                                            Direct <span className="text-[#4ade80] italic" style={{ fontFamily: "Dancing Script, cursive" }}>Details</span>
                                        </h2>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Connect with Zoravia</p>
                                    </div>
                                    <div className="flex gap-4">
                                        {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                            <button key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#4ade80] hover:text-[#021732] transition-all duration-500">
                                                <Icon size={16} />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-[#4ade80] ml-1">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-[#021732] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:border-[#4ade80] transition-all outline-none"
                                                placeholder="Identity"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-[#4ade80] ml-1">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-[#021732] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:border-[#4ade80] transition-all outline-none"
                                                placeholder="Connection"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-[#4ade80] ml-1">Your Message *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full bg-[#021732] border border-white/10 rounded-3xl px-6 py-4 text-white placeholder:text-white/10 focus:border-[#4ade80] transition-all outline-none resize-none"
                                            placeholder="Share your travel intentions..."
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="group bg-[#4ade80] text-[#021732] px-12 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.5em] hover:bg-white hover:-translate-y-1 transition-all duration-500 flex items-center gap-4 shadow-[0_20px_60px_rgba(74,222,128,0.1)]"
                                        >
                                            Send Message
                                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                        <p className="mt-6 text-[10px] text-white/20 italic tracking-widest">Typical response: Under 2 Hours</p>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </Motion.div>
                </div>
            </section>

            {/* Branded Footer Micro-Detail */}
            <section className="py-12 text-center opacity-30">
                <p className="text-[10px] font-bold uppercase tracking-[1em] text-white">Zoravia Terra</p>
            </section>

        </div>
    );
}

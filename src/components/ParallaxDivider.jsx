import React from "react";
import { Quote } from "lucide-react";

/**
 * ParallaxDivider Component
 * A fixed-background section used to break up content and add cinematic depth.
 */
const ParallaxDivider = ({ image = "/assets/images/lion.png", quote = "Discover the magic of Rwanda's wilderness." }) => {
    return (
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-center bg-cover bg-scroll lg:bg-fixed"
                style={{
                    backgroundImage: `url('${image}')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-[#021732]/50 z-10" />
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center max-w-3xl space-y-6">
                <div className="w-12 h-[1px] bg-[#D4A574] mx-auto opacity-50" />
                <h3 className="text-2xl md:text-3xl font-light italic leading-tight text-white select-none" style={{ fontFamily: "var(--title-font)" }}>
                    "{quote}"
                </h3>
                <div className="w-12 h-[1px] bg-[#D4A574] mx-auto opacity-50" />
            </div>
        </section>
    );
};

export default ParallaxDivider;

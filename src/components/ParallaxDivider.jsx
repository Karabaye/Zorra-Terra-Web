import React from "react";
import { Quote } from "lucide-react";

/**
 * ParallaxDivider Component
 * A fixed-background section used to break up content and add cinematic depth.
 */
const ParallaxDivider = ({ image = "/assets/imgs/lion.png", quote = "Discover the magic of Rwanda's wilderness." }) => {
    return (
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: `url('${image}')`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-[#021732]/50 z-10" />
            </div>

            <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl space-y-8">
                <div className="w-16 h-[1px] bg-[#4ade80] mx-auto opacity-50" />
                <h3 className="text-3xl md:text-5xl font-light italic leading-tight text-white select-none" style={{ fontFamily: "Dancing Script, cursive" }}>
                    "{quote}"
                </h3>
                <div className="w-16 h-[1px] bg-[#4ade80] mx-auto opacity-50" />
            </div>
        </section>
    );
};

export default ParallaxDivider;

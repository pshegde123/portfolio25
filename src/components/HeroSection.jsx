import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrambleTextPlugin);


const HeroSection = () => {
    useGSAP(() => {
        var tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });

        tl.to("#scramble", {
            duration: 3,
            scrambleText: {
                text: "Full Stack Web Developer",
                chars: "lowerCase",
                revealDelay: 0.5,
                tweenLength: false
            }
        })
    });

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1>Hi I am  <span className="text-primary animate-fade-in-delay-1">Pradnya</span> Hegde</h1>
                    <h3 id="scramble" className="text-4xl md:text-6xl font-bold tracking-tight">
                    </h3>

                    <p id="myInfo" className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-1 animate-fade-in-delay-3">
                        I build interfaces that are both beautiful and functional.
                    </p>

                    <div className="pt-4 opacity-1 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};

export default HeroSection;
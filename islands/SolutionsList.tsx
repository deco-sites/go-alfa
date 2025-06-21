import { useLayoutEffect, useRef } from "preact/hooks";
import gsap from "gsap";
import ScrollTrigger from "scrollTrigger";
import CustomIcon from "site/components/ui/lucide-icon.tsx";

export interface Solution {
    title: string;
    description: string;
    icon: string;
}

const SolutionsList = ({ solutions }: { solutions: Solution[] }) => {
    const listRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".solution-card");

            gsap.fromTo(
                cards,
                {
                    opacity: 0,
                    y: 40,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                },
            );
        }, listRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={listRef}
            class="flex justify-between items-center flex-wrap gap-4 p-2 md:p-4"
        >
            {solutions?.map((solution, index) => (
                <div
                    key={index}
                    className="solution-card flex flex-col w-full border border-white/5 p-6 md:min-w-[400px] min-h-[200px] md:max-h-[300px] lg:flex-1 bg-white/5 gap-2 hover:bg-white/10 hover:border-white/15 transition-all duration-300"
                >
                    <CustomIcon name={solution.icon} size={24} />
                    <h2 className="text-xl text-primary">{solution.title}</h2>
                    <p className="font-light">{solution.description}</p>
                </div>
            ))}
        </div>
    );
};

export default SolutionsList;

import FaqItem from "site/islands/Faq-item.tsx";
import { FaqItemProps } from "site/islands/Faq-item.tsx";
import { useLayoutEffect, useRef } from "preact/hooks";
import gsap from "gsap";

export interface Faq {
    faq: FaqItemProps[];
}

const FaqList = ({ faq }: Faq) => {
    const faqRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".faq-item");

            cards.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        x: index % 2 === 0 ? 40 : -40,
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        delay: 1 * (index + 1),
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: faqRef.current,
                            start: "top 80%",
                            end: "bottom 60%",
                            toggleActions: "play none none reverse",
                        },
                    },
                );
            });
        }, faqRef);

        return () => ctx.revert();
    }, [faqRef]);

    return (
        <div ref={faqRef} class=" lg:max-w-[700px] w-full space-y-8">
            {faq?.map((question, i) => (
                <FaqItem
                    key={i}
                    question={question.question}
                    answer={question.answer}
                />
            ))}
        </div>
    );
};

export default FaqList;

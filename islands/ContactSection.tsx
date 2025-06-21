import { useLayoutEffect, useRef } from "preact/hooks";
import gsap from "gsap";
import ScrollTrigger from "scrollTrigger";
import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import HoursOfOperation from "site/islands/HoursOfOperation.tsx";

export interface DaysOfWeek {
    dayOfWeek: string;
}

export interface CTA {
    href: string;
    text?: string;
    outline?: boolean;
    icon: AvailableIcons;
}

export interface ContactProps {
    title: string;
    /** @format rich-text */
    subtitle: string;
    description: string;
    image?: ImageWidget;
    placement?: "left" | "right";
    cta: CTA[];
    daysOfWeek?: DaysOfWeek[];
    startTime?: string;
    endTime?: string;
}

const PLACEMENT = {
    left: "flex-col md:flex-row-reverse",
    right: "flex-col md:flex-row",
};

const ContactSection = ({ ...props }: ContactProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const el = sectionRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 60%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                ".contact-image",
                { opacity: 0, x: 200, scale: 0 },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                },
            )
                .fromTo(
                    ".contact-subtitle",
                    { opacity: 0, x: 40 },
                    { opacity: 1, x: 0, duration: 0.5 },
                    "-=0.5",
                )
                .fromTo(
                    ".contact-description",
                    { opacity: 0, y: -40 },
                    { opacity: 1, y: 0, duration: 0.5 },
                    "-=0.5",
                )
                .fromTo(
                    ".contact-cta",
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 },
                )
                .fromTo(
                    ".contact-hours",
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.4 },
                );
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={sectionRef}
            class={`flex ${PLACEMENT[props.placement!]} w-full gap-12`}
        >
            <div class="w-full overflow-hidden contact-image">
                <Image
                    width={800}
                    class="object-cover z-10"
                    sizes="h-full md:min-h-[400px] w-full"
                    src={props.image!}
                    alt={props.title}
                    decoding="async"
                    loading="lazy"
                />
            </div>

            <div class="flex flex-auto lg:min-w-[600px] flex-col gap-4">
                <h2
                    class="text-2xl md:text-4xl font-bold text-secondary contact-subtitle"
                    dangerouslySetInnerHTML={{ __html: props.subtitle }}
                />
                <h3 class="contact-description">{props.description}</h3>

                <div class="flex gap-4 flex-wrap">
                    {props.cta.map(({ href, text, outline, icon }, i) => (
                        <a
                            key={i}
                            href={href}
                            target={href.includes("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            class={`contact-cta font-bold btn btn-primary text-base w-full md:w-fit flex items-center gap-2 ${
                                text && "px-10"
                            } ${
                                outline &&
                                "btn-outline rounded-md font-medium border-white/[0.06]"
                            }`}
                        >
                            <Icon id={icon} size={16} strokeWidth={0.1} />
                            {text && text}
                        </a>
                    ))}
                </div>

                <div class="space-y-6 mt-auto contact-hours">
                    <h5 class="text-primary text-2xl">Horas</h5>
                    <HoursOfOperation
                        daysOfWeek={props.daysOfWeek!}
                        startTime={props.startTime!}
                        endTime={props.endTime!}
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactSection;

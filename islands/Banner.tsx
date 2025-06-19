import { ImageWidget } from "apps/admin/widgets.ts";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "preact/hooks";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
    icon?: AvailableIcons;
}

export interface BannerProps {
    title?: string;
    description?: string;
    image?: ImageWidget;
    size?: "cover" | "contain";
    cta?: CTA[];
}

const splitFirstWord = (
    str: string,
): { highlightedWord: string; remainingText: string } => {
    const [highlightedWord, ...restWords] = str.trim().split(" ");
    return {
        highlightedWord,
        remainingText: restWords.join(" "),
    };
};

const splitIntoPhrases = (text: string) => {
    const splitIndex = text.slice(1).search(/[A-Z]/) + 1;

    const firstPart = text.slice(0, splitIndex).trim();
    const secondPart = text.slice(splitIndex).trim();

    return [
        splitFirstWord(firstPart),
        splitFirstWord(secondPart),
    ];
};

const Banner = ({
    title = "Click here to tweak this text however you want.",
    description =
        "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
    image,
    size = "cover",
    cta = [
        { id: "change-me-1", href: "/", text: "Change me", outline: false },
        { id: "change-me-2", href: "/", text: "Change me", outline: true },
    ],
}: BannerProps) => {
    const phrases = splitIntoPhrases(title);

    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const ctaRef = useRef(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                duration: 0.8,
            },
        });

        const title = titleRef.current;
        const description = descriptionRef.current;
        const cta = ctaRef.current;

        tl.fromTo(title, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
            .fromTo(
                description,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0 },
                "-=0.6",
            )
            .fromTo(cta, { opacity: 0, x: 100 }, { opacity: 1, x: 0 }, "-=0.4");

        return () => {
            gsap.killTweensOf(title);
            gsap.killTweensOf(description);
            gsap.killTweensOf(cta);
        };
    }, []);

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${image ? image : ""})`,
                    backgroundSize: `${size}`,
                }}
                class="flex flex-col relative items-center gap-8 h-full bg-[position:80%_center]  md:bg-top  before:bg-[#0E0F14] transition-all duration-300 before:opacity-65 before:md:opacity-45 before:absolute before:inset-0 before:z-0"
            >
                <div class="w-full pl-0 md:pl-10 h-full z-10 flex  items-center ">
                    <div class=" flex max-w-[890px] flex-col gap-7 px-4">
                        <div
                            class="flex flex-col gap-2 text-4xl font-bold md:text-5xl text-primary leading-none "
                            ref={titleRef}
                        >
                            {phrases.map((
                                phrase: {
                                    highlightedWord: string;
                                    remainingText: string;
                                },
                                index: number,
                            ) => (
                                <div key={index}>
                                    <h1 class="text-secondary flex-col  flex md:flex-row gap-2">
                                        <span>
                                            {phrase.highlightedWord}
                                        </span>
                                        <span class="text-primary">
                                            {phrase.remainingText}
                                        </span>
                                    </h1>
                                </div>
                            ))}
                        </div>
                        <div class={"space-y-14"}>
                            <p
                                ref={descriptionRef}
                                style={{ fontFamily: "Roboto Condensed" }}
                                class=" md:text-md leading-[150%] text-primary text-xl font-light"
                            >
                                {description}
                            </p>
                            <div
                                class=" gap-3  h-10 w-full text-3xl"
                                ref={ctaRef}
                            >
                                {cta?.map((item) => (
                                    <a
                                        key={item?.id}
                                        id={item?.id}
                                        href={item?.href}
                                        target={item?.href.includes("http")
                                            ? "_blank"
                                            : "_self"}
                                        rel="noopener noreferrer"
                                        class={`font-bold btn px-10  btn-primary flex md:max-w-[280px] w-full items-center text-sm bg-gradient-to-b from-white via-slate-100 to-slate-300 ${
                                            item.outline && "btn-outline"
                                        }`}
                                    >
                                        {item?.icon && (
                                            <Icon
                                                id={item?.icon}
                                                size={16}
                                            />
                                        )}
                                        {item?.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class={"absolute  bottom-0 w-full h-56 bg-gradient-to-t from-[#0E0F14] via-[#0E0F14]/70"}
            />
        </>
    );
};
export default Banner;

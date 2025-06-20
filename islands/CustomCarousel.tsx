import { ImageWidget } from "apps/admin/widgets.ts";
import { gsap } from "gsap";
import Draggable from "draggable";
import { useLayoutEffect, useRef } from "preact/hooks";

export interface Props {
    images?: ImageWidget[];
    width?: number;
    height?: number;
}

const CustomCarousel = ({ images = [], width = 200, height = 100 }: Props) => {
    const duplicated = [...images, ...images];

    const containerRef = useRef<HTMLDivElement>(null);
    const tweenRef = useRef<gsap.core.Tween | null>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(Draggable);

        const container = containerRef.current;
        if (!container) return;

        const maxScrollX = container.offsetWidth -
            container.parentElement!.offsetWidth;

        const createTween = (xStart: number) => {
            const tween = gsap.to(container, {
                x: -maxScrollX,
                duration: 20,
                ease: "ease-in-out",
                repeat: -1,
                onStart() {
                    gsap.set(container, { x: xStart });
                },
            });

            tweenRef.current = tween;
            return tween;
        };

        let tween = createTween(0);

        Draggable.create(container, {
            type: "x",
            edgeResistance: 0.65,
            inertia: true,
            bounds: {
                minX: -maxScrollX,
                maxX: 0,
            },
            onPress() {
                tween.pause();
            },
            onRelease() {
                const currentX = gsap.getProperty(container, "x") as number;
                tween.kill();
                tween = createTween(currentX);
            },
        });

        return () => {
            tween.kill();
            gsap.killTweensOf(container);
        };
    }, []);

    const handleMouseEnter = () => {
        tweenRef.current?.pause();
    };

    const handleMouseLeave = () => {
        tweenRef.current?.play();
    };

    return (
        <div
            class={"overflow-hidden"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={containerRef}
                class="flex w-max gap-24 select-none"
            >
                {duplicated.map((image, index) => (
                    <img
                        key={index}
                        loading="lazy"
                        src={image}
                        alt=""
                        width={width}
                        height={height}
                        class="object-contain flex-shrink-0 filter grayscale hover:filter-none transition duration-300"
                        aria-hidden="true"
                    />
                ))}
            </div>
        </div>
    );
};

export default CustomCarousel;

// deno-lint-ignore-file no-explicit-any
import { ImageWidget } from "apps/admin/widgets.ts";
import { gsap } from "gsap";
import Draggable from "draggable";
import { useLayoutEffect, useRef } from "preact/hooks";
import { useIsMobile } from "site/hooks/use-mobile.ts";

export interface Props {
    images?: ImageWidget[];
    width?: number;
    height?: number;
}

const CustomCarousel = ({ images = [], width = 200, height = 100 }: Props) => {
    const isMobile = useIsMobile();

    const duplicated = [...images, ...images];

    const containerRef = useRef<HTMLDivElement>(null);
    const draggableInstance = useRef<any>(null);

    useLayoutEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        if (!isMobile) {
            gsap.set(container, { x: 0 });
            return;
        }

        gsap.registerPlugin(Draggable);

        const maxScrollX = container.offsetWidth -
            container.parentElement!.offsetWidth;

        draggableInstance.current = Draggable.create(container, {
            type: "x",
            edgeResistance: 0.65,
            inertia: true,
            bounds: {
                minX: -maxScrollX,
                maxX: 0,
            },
            cursor: "grab",
            activeCursor: "grabbing",
        });

        return () => {
            if (draggableInstance.current) {
                draggableInstance.current.forEach((d: any) => d.kill());
                draggableInstance.current = null;
            }
            gsap.killTweensOf(container);
        };
    }, [isMobile]);

    if (isMobile) {
        return (
            <div class="overflow-hidden">
                <div
                    ref={containerRef}
                    class="flex w-max gap-24 select-none cursor-grab active:cursor-grabbing"
                    style={{ touchAction: "pan-y" }}
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
    } else {
        return (
            <div class="overflow-hidden">
                <div class="flex justify-between w-full gap-24 select-none px-2">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            loading="lazy"
                            src={image}
                            alt=""
                            width={width}
                            height={height}
                            class="object-contain flex-shrink-0 filter cursor-pointer grayscale hover:filter-none transition duration-300"
                        />
                    ))}
                </div>
            </div>
        );
    }
};

export default CustomCarousel;

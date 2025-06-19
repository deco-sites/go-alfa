import { gsap } from "gsap";
import { ScrollTrigger } from "scrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect } from "preact/hooks";
import Image from "apps/website/components/Image.tsx";

export default function Scroll() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    useLayoutEffect(() => {
        gsap.to("#teste", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: "#teste",
                markers: true,
                start: "top 400px",
                end: "bottom 500px",
                scrub: true,
            },
        });

        return () => {
            gsap.killTweensOf("#teste");
        };
    }, []);

    return (
        <div class={"w-full flex justify-center items-center"}>
            <Image
                src={"https://d2d7stu5fcdz3l.cloudfront.net/Custom/Content/Products/10/54/1054672_relogio-feminino-seculus-13018lpsvds3-dourado_z3_637007932495504111.webp"}
                alt={"relogio"}
                width={600}
                height={600}
                class={"translate-x-[-700px] opacity-0"}
                id={"teste"}
            />
        </div>
    );
}

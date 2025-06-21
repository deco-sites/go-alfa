import { gsap } from "gsap";
import ScrollTrigger from "scrollTrigger";
import { useLayoutEffect, useRef } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "Outline" | "Ghost";
}

export interface ImageWithParagraphProps {
  /** Add commentMore actions
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  description?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  descriptionPlacement?: "left" | "right" | "center" | "justify";
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
  ctaPlacement?: "left" | "right" | "center";
  index?: number;
}

const PLACEMENT = {
  left: "flex-col md:flex-row-reverse",
  right: "flex-col md:flex-row",
};

const CTA_PLACEMENT = {
  left: "start",
  right: "end",
  center: "center",
};

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ImageWithParagraph({
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  descriptionPlacement = "left",
  image = DEFAULT_IMAGE,
  placement = "left",
  index = 1,
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", style: "Outline" },
    { id: "change-me-2", href: "/", text: "Change me", style: "Ghost" },
  ],
  ctaPlacement = "left",
}: ImageWithParagraphProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = elementRef.current;

    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        "#image",
        { opacity: 0, x: 70 },
        { opacity: 1, x: 0, duration: 0.8 + index },
        `-=0.2${index}`,
      )
        .fromTo(
          "#description",
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.8 + index },
          `-=0.2${index}`,
        )
        .fromTo(
          "#cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 + index },
          `-=0.2${index}`,
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={elementRef}
      class="lg:container md:max-w-7xl lg:mx-auto mx-4 text-sm"
    >
      <div
        class={`flex ${PLACEMENT[placement]} gap-12 md:gap-14 text-left  z-10`}
      >
        <div id={"image"} class="w-full md:w-1/2 h-full">
          <Image
            width={800}
            class="object-cover z-10 "
            sizes="h-full w-full"
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-between md:space-y-4 md:max-w-xl  z-10">
          <div
            id={"description"}
            style={`text-align:${descriptionPlacement}`}
            class="inline-block font-light"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          {cta && (
            <div
              id={"cta"}
              class={`flex gap-3 pt-4  justify-${CTA_PLACEMENT[ctaPlacement]}`}
            >
              {cta.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-primary
                  ${!item.style || item.style == "Outline" && "btn-outline"}
                  ${item.style == "Ghost" && "btn-ghost"}
                `}
                >
                  {item?.text}
                  {item.style == "Ghost" && (
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.70697 16.9767L15.414 11.2697L9.70697 5.56274L8.29297 6.97674L12.586 11.2697L8.29297 15.5627L9.70697 16.9767Z"
                        fill="#18181B"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

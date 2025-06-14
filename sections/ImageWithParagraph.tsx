import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "Outline" | "Ghost";
}

export interface ImageWithParagraphProps {
  title?: string;
  titlePlacement?: "left" | "right" | "center";
  /** @format textarea */
  description?: string;
  descriptionPlacement?: "left" | "right" | "center" | "justify";
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
  ctaPlacement?: "left" | "right" | "center";
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
  title = "Here's an intermediate size heading you can edit",
  titlePlacement = "left",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  descriptionPlacement = "left",
  image = DEFAULT_IMAGE,
  placement = "left",
  disableSpacing,
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", style: "Outline" },
    { id: "change-me-2", href: "/", text: "Change me", style: "Ghost" },
  ],
  ctaPlacement = "left",
}: ImageWithParagraphProps) {
  return (
    <div class="lg:container md:max-w-7xl lg:mx-auto mx-4 text-sm ">
      <div
        class={`flex ${
          PLACEMENT[placement]
        } gap-12 md:gap-14 text-left items-center z-10 ${
          disableSpacing?.top ? "" : "pt-4"
        } ${disableSpacing?.bottom ? "" : "pb-6"}`}
      >
        <div class="w-full md:w-1/2  overflow-hidden">
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
        <div class="w-full md:w-1/2 space-y-2 md:space-y-4 md:max-w-xl gap-4 z-10">
          <p
            class="text-2xl text-primary leading-snug"
            style={`text-align:${titlePlacement}`}
          >
            {title}
          </p>
          <p
            class="leading-normal"
            style={`text-align:${descriptionPlacement}`}
          >
            {description}
          </p>
          {cta && (
            <div
              class={`flex gap-3 pt-4 justify-${CTA_PLACEMENT[ctaPlacement]}`}
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

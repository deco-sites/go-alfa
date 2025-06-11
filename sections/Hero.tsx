// deno-lint-ignore-file react-no-danger
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  placement?: "center" | "bottom" | "top";
  size?: "cover" | "contain";
  cta?: CTA[];
}

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  image,
  placement = "center",
  size = "cover",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  return (
    <nav class="h-[820px] relative ">
      <div
        style={{
          backgroundImage: `url(${image ? image : ""})`,
          backgroundSize: `${size}`,
          backgroundPosition: `${placement}`,
        }}
        class="flex flex-col items-center gap-8 h-full before:bg-black before:opacity-45 before:absolute before:inset-0 before:z-0"
      >
        <div class="w-full lg:max-w-[1200px]  h-full  z-10 flex justify-center items-center ">
          <div class=" flex justify-center items-center flex-col gap-10 px-4">
            <div
              class="inline-block lg:text-[80px] text-center font-bold text-4xl  leading-none"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            >
            </div>
            <p class=" md:text-md leading-[150%] text-center text-white/80 text-2xl">
              {description}
            </p>
            <div class="flex justify-center items-center gap-3  h-10 w-full text-3xl">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  class={`font-bold btn btn-primary uppercase text-base    ${
                    item.outline && "btn-outline"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

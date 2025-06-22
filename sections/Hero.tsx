import Banner, { BannerProps } from "site/islands/Banner.tsx";

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  image,
  size = "cover",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: BannerProps) {
  return (
    <nav class="h-screen md:h-[820px] relative ">
      <Banner
        cta={cta}
        description={description}
        image={image}
        size={size}
        title={title}
      />
    </nav>
  );
}

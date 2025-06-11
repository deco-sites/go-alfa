import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
}

export default function Header({
  logo = {
    src:
      "https://img1.wsimg.com/isteam/ip/9eaa588b-0d60-455a-8fbb-c6bd324907c3/26288908%20(1).svg/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:95",
    alt: "Logo",
  },
}: Nav) {
  return (
    <nav class="absolute top-0 left-0 pl-8 bg-transparent  z-20">
      {/* main content */}
      <div class="">
        <a href="/">
          <Image src={logo.src || ""} width={100} height={28} alt={logo.alt} />
        </a>
      </div>
    </nav>
  );
}

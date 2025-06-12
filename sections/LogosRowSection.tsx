import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface ImageProps {
    src: ImageWidget;
    alt?: string;
    href?: string;
}

export interface Props {
    images: ImageProps[];
    width?: number;
}

const LogosRowSection = ({ images, width = 200 }: Props) => {
    return (
        <>
            {images?.map((image, index) => (
                <div
                    key={index}
                >
                    <a
                        href={image.href || ""}
                        rel="noopener noreferrer"
                        target={"_blank"}
                        class={`${
                            image.href ? "cursor-pointer" : "cursor-default"
                        } w-[320px] h-[80px] `}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt || ""}
                            width={width}
                            sizes="h-full w-full"
                            loading={"lazy"}
                            class={"object-contain"}
                        />
                    </a>
                </div>
            ))}
        </>
    );
};

export default LogosRowSection;

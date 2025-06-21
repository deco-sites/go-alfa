import TitleSection from "../islands/TitleSection.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import CustomCarousel from "site/islands/CustomCarousel.tsx";

export interface Props {
    title: string;
    subtitle?: string;
    description?: string;
    images?: ImageWidget[];
    width?: number;
    height?: number;
}

const Solutions = (
    { title, subtitle, description, images, width, height }: Props,
) => {
    return (
        <div
            class={"lg:container md:max-w-7xl lg:mx-auto mx-0 md:mx-4 pb-12 overflow-x-hidden"}
        >
            <TitleSection
                title={title}
                subtitle={subtitle}
                description={description}
            />
            <div
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent, black 20%, black 90%, transparent)",
                }}
                class={"lg:container md:max-w-7xl lg:mx-auto mx-0 md:mx-4 pb-12  "}
            >
                <CustomCarousel images={images} width={width} height={height} />
            </div>
        </div>
    );
};

export default Solutions;

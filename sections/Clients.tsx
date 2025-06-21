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

const Clients = (
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
                class={"lg:container md:max-w-7xl lg:mx-auto mx-0 md:mx-4 pb-12 mask-mobile"}
            >
                <CustomCarousel images={images} width={width} height={height} />
            </div>
        </div>
    );
};

export default Clients;

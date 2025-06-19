import ImageWithParagraph, {
    ImageWithParagraphProps,
} from "site/sections/ImageWithParagraph.tsx";
import TitleSection from "site/sections/TitleSection.tsx";

export interface Props {
    title: string;
    subtitle?: string;
    imageWithParagraph?: ImageWithParagraphProps[];
}

const About = ({ title, subtitle, imageWithParagraph }: Props) => {
    return (
        <div class={"flex flex-col items-center md:px-4 p-0"}>
            <TitleSection title={title} subtitle={subtitle} />
            <div class={"w-full h-full"}>
                {imageWithParagraph?.map((item, index) => (
                    <ImageWithParagraph
                        key={index}
                        description={item.description}
                        image={item.image}
                        placement={item.placement}
                        cta={item.cta}
                        ctaPlacement={item.ctaPlacement}
                        descriptionPlacement={item.descriptionPlacement}
                    />
                ))}
            </div>
        </div>
    );
};

export default About;

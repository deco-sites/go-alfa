import ImageWithParagraph, {
    ImageWithParagraphProps,
} from "../islands/ImageWithParagraph.tsx";
import TitleSection from "../islands/TitleSection.tsx";

export interface Props {
    title: string;
    subtitle?: string;
    imageWithParagraph?: ImageWithParagraphProps[];
}

const About = ({ title, subtitle, imageWithParagraph }: Props) => {
    return (
        <div class={"flex flex-col items-center md:px-4 p-0 overflow-hidden"}>
            <TitleSection title={title} subtitle={subtitle} />
            <div class={"w-full h-full space-y-8"}>
                {imageWithParagraph?.map((item, index) => (
                    <ImageWithParagraph
                        key={index}
                        index={index}
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

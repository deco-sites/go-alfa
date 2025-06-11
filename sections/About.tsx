import ImageWithParagraph, {
    ImageWithParagraphProps,
} from "site/sections/ImageWithParagraph.tsx";
import TitleSection from "site/sections/TitleSection.tsx";

export interface Props {
    title?: string;
    imageWithParagraph?: ImageWithParagraphProps[];
}

const About = ({ title, imageWithParagraph }: Props) => {
    return (
        <div class={"flex flex-col items-center"}>
            <TitleSection>{title}</TitleSection>
            <div class={" w-full h-full"}>
                {imageWithParagraph?.map((item, index) => (
                    <ImageWithParagraph
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        placement={item.placement}
                        cta={item.cta}
                        ctaPlacement={item.ctaPlacement}
                        disableSpacing={item.disableSpacing}
                        descriptionPlacement={item.descriptionPlacement}
                        titlePlacement={item.titlePlacement}
                    />
                ))}
            </div>
        </div>
    );
};

export default About;

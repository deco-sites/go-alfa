import LogosRowSection, { ImageProps } from "site/sections/LogosRowSection.tsx";

export interface Specialization {
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */
    title: string;
    /**
     * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
     */
    image: ImageProps[];
    width?: number;
}

export interface Props {
    section: Specialization[];
}

const Specializations = ({ section }: Props) => {
    return (
        <div class=" bg-primary w-full">
            <div
                class={"flex flex-col items-center lg:container md:max-w-7xl lg:px-auto px-4 py-12"}
            >
                <div
                    class={" w-full h-full space-y-16"}
                >
                    {section && (
                        section.map((item, index) => (
                            <div
                                key={index}
                                class={"flex flex-col items-center gap-6 w-full h-full"}
                            >
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: item.title,
                                    }}
                                >
                                </div>
                                <div
                                    class={"flex justify-center lg:justify-between flex-wrap items-center w-full gap-6 h-full"}
                                >
                                    <LogosRowSection
                                        images={item.image}
                                        width={item.width}
                                    />
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Specializations;

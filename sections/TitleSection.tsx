import { ComponentChildren } from "preact";

export interface Props {
    children: ComponentChildren;
    className?: string;
}

const TitleSection = ({ children, className }: Props) => {
    return (
        <h1
            class={`text-center relative text-5xl text-primary py-8 md:py-16  font-bold ${
                className ?? ""
            } `}
        >
            {children}
        </h1>
    );
};

export default TitleSection;

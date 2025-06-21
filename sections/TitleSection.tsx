export interface Props {
    title?: string;
    subtitle?: string;
    description?: string;
    className?: string;
}

const TitleSection = ({ title, subtitle, description, className }: Props) => {
    return (
        <div
            class={`flex flex-col justify-center items-center py-8 gap-4 px-4 ${
                description || subtitle ? "md:py-20" : "md:py-12"
            }`}
        >
            <h1
                class={`text-center relative w-fit text-base text-secondary  font-medium before:content-[""] before:absolute before:w-[34px] before:h-[1px] before:from-secondary before:-left-12 before:top-[50%] before:bg-gradient-to-l before:via-[#1B4560] before:to-base after:content-[""] after:absolute after:w-[34px] after:h-[1px] after:from-secondary after:-right-12 after:top-[50%] after:bg-gradient-to-r after:via-[#1B4560] after:to-base   ${
                    className ?? ""
                } `}
            >
                {title}
            </h1>
            <h3
                class={"text-2xl md:text-3xl font-medium text-center text-primary"}
            >
                {subtitle}
            </h3>
            <p class={"text-center text-primary/50 font-light"}>
                {description}
            </p>
        </div>
    );
};

export default TitleSection;

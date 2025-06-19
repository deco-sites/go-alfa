import TitleSection from "site/sections/TitleSection.tsx";
import CustomIcon from "../components/ui/lucide-icon.tsx";

export interface Solution {
    title: string;
    description: string;
    icon: string;
}

export interface Props {
    title: string;
    subtitle?: string;
    description?: string;
    solutions?: Solution[];
}

const Solutions = ({ solutions, title, subtitle, description }: Props) => {
    return (
        <div
            class={"lg:container md:max-w-7xl lg:mx-auto mx-0 md:mx-4 pb-12"}
        >
            <TitleSection
                title={title}
                subtitle={subtitle}
                description={description}
            />
            <div
                class={"flex justify-between items-center flex-wrap  gap-4 p-2 md:p-4  "}
            >
                {solutions?.map((solution, index) => {
                    return (
                        <div
                            key={index}
                            className={`flex flex-col w-full border border-white/5 p-6 md:min-w-[400px] min-h-[200px] md:max-h-[300px] lg:flex-1 bg-white/5 gap-2 hover:bg-white/10 hover:border-white/15 transition-all duration-300 `}
                        >
                            <CustomIcon name={solution.icon} size={24} />
                            <h2 className="text-xl text-primary">
                                {solution.title}
                            </h2>
                            <p className="font-light">{solution.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Solutions;

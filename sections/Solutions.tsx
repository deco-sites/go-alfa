import TitleSection from "../islands/TitleSection.tsx";
import SolutionsList, { Solution } from "site/islands/SolutionsList.tsx";

export interface Props {
    title: string;
    subtitle?: string;
    description?: string;
    solutions?: Solution[];
}

const Solutions = ({ solutions, title, subtitle, description }: Props) => {
    return (
        <div
            class={"lg:container md:max-w-7xl lg:mx-auto mx-0 md:mx-4 pb-12 overflow-x-hidden"}
        >
            <TitleSection
                title={title}
                subtitle={subtitle}
                description={description}
            />
            <SolutionsList solutions={solutions ?? []} />
        </div>
    );
};

export default Solutions;

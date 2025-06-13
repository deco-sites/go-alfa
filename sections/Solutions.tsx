import TitleSection from "site/sections/TitleSection.tsx";

export interface Solution {
    title: string;
    description: string;
}

export interface Props {
    solutions?: Solution[];
}

const Solutions = ({ solutions }: Props) => {
    return (
        <div class={"lg:container md:max-w-7xl lg:mx-auto mx-4 pb-12"}>
            <TitleSection>Soluções</TitleSection>
            <div class={"flex justify-between flex-wrap  gap-4   "}>
                {solutions?.map((solution, index) => {
                    const isLast = index === solutions.length - 1;

                    return (
                        <div
                            key={index}
                            className={`flex flex-col justify-center items-center w-full  p-6 md:min-w-[400px] h-[250px] md:max-h-[300px] lg:flex-1 text-center gap-6 ${
                                isLast
                                    ? ""
                                    : "border-b-[1px] border-r-0 lg:border-b-0 lg:border-r-[1px] border-primary/10"
                            }`}
                        >
                            <h2 className="text-3xl text-primary">
                                {solution.title}
                            </h2>
                            <p className="text-xl">{solution.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Solutions;

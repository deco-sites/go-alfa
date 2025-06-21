import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TitleSection from "../islands/TitleSection.tsx";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import HoursOfOperation from "site/islands/HoursOfOperation.tsx";

export interface DaysOfWeek {
    dayOfWeek: string;
}

export interface CTA {
    href: string;
    text?: string;
    outline?: boolean;
    icon: AvailableIcons;
}

export interface Props {
    title: string;
    /** @format rich-text */
    subtitle: string;
    description: string;
    image?: ImageWidget;
    placement?: "left" | "right";
    cta: CTA[];
    daysOfWeek?: DaysOfWeek[];
    startTime?: string;
    endTime?: string;
}

const PLACEMENT = {
    left: "flex-col md:flex-row-reverse",
    right: "flex-col md:flex-row",
};

const DEFAULT_IMAGE =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

const DEFAULT_DAYS_OF_WEEK: DaysOfWeek[] = [
    {
        dayOfWeek: "Segunda-feira",
    },
    {
        dayOfWeek: "Terça-feira",
    },
    {
        dayOfWeek: "Quarta-feira",
    },
    {
        dayOfWeek: "Quinta-feira",
    },
    {
        dayOfWeek: "Sexta-feira",
    },
    {
        dayOfWeek: "Sábado",
    },
    {
        dayOfWeek: "Domingo",
    },
];

const Contact = (
    {
        title = "Contato",
        subtitle = "Vamos conversar sobre seus próximos projetos ?",
        description,
        cta,
        placement = "left",
        image = DEFAULT_IMAGE,
        daysOfWeek = DEFAULT_DAYS_OF_WEEK,
        startTime = "08:00",
        endTime = "17:00",
    }: Props,
) => {
    return (
        <div
            id={"contact"}
            class={"lg:container md:max-w-7xl lg:px-auto px-4 pb-12 "}
        >
            <TitleSection title={title} />
            <div
                class={`flex ${PLACEMENT[placement]} w-full  gap-12 `}
            >
                <div class="w-full overflow-hidden">
                    <Image
                        width={800}
                        class="object-cover z-10 "
                        sizes="h-full md:min-h-[400px] w-full"
                        src={image}
                        alt={image}
                        decoding="async"
                        loading="lazy"
                    />
                </div>
                <div
                    class={"flex flex-auto lg:min-w-[600px] flex-col gap-4 "}
                >
                    <h2
                        class="text-2xl md:text-4xl font-bold text-secondary"
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                    />
                    <h3>{description}</h3>
                    <div class={"flex gap-4 flex-wrap"}>
                        {cta.map(({ href, text, outline, icon }) => (
                            <a
                                href={href}
                                target={href.includes("http")
                                    ? "_blank"
                                    : "_self"}
                                rel="noopener noreferrer"
                                class={`font-bold btn  btn-primary text-base w-full md:w-fit flex items-center gap-2 ${
                                    text && "px-10"
                                } ${
                                    outline &&
                                    "btn-outline rounded-md font-medium border-white/[0.06] "
                                }`}
                            >
                                <Icon id={icon} size={16} strokeWidth={0.1} />
                                {text && text}
                            </a>
                        ))}
                    </div>
                    <div
                        class={"space-y-6 mt-auto"}
                    >
                        <h5 class={"text-primary text-2xl"}>Horas</h5>
                        <HoursOfOperation
                            daysOfWeek={daysOfWeek}
                            startTime={startTime}
                            endTime={endTime}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

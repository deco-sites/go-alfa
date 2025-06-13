import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TitleSection from "site/sections/TitleSection.tsx";
import Icon from "site/components/ui/Icon.tsx";
import HoursOfOperation from "site/islands/HoursOfOperation.tsx";

export interface DaysOfWeek {
    dayOfWeek: string;
}

export interface CTA {
    href: string;
    text: string;
    outline?: boolean;
}

export interface Props {
    title: string;
    description: string;
    image?: ImageWidget;
    email: string;
    placement?: "left" | "right";
    whatsapp?: CTA;
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
        title,
        description,
        email,
        whatsapp,
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
            <TitleSection>{title}</TitleSection>
            <div
                class={`flex ${PLACEMENT[placement]} w-full   gap-12 `}
            >
                <div class="w-full   overflow-hidden">
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
                    class={"flex flex-col gap-4 lg:max-w-[520px] justify-between"}
                >
                    <h3>{description}</h3>
                    {whatsapp && (
                        <a
                            href={whatsapp.href}
                            target={whatsapp?.href.includes("http")
                                ? "_blank"
                                : "_self"}
                            rel="noopener noreferrer"
                            class={`font-bold btn px-10  btn-primary text-base w-full md:w-fit flex items-center gap-2 ${
                                whatsapp.outline && "btn-outline"
                            }`}
                        >
                            <Icon id="WhatsApp" size={24} strokeWidth={0.1} />
                            {whatsapp.text}
                        </a>
                    )}
                    <div class={"flex flex-col gap-6"}>
                        <h5 class={"text-primary text-2xl"}>Allfa</h5>
                        <a
                            href={`mailto:${email}`}
                            class={"hover:text-primary transition-colors duration-300"}
                        >
                            {email}
                        </a>
                    </div>
                    <div class={"space-y-6"}>
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

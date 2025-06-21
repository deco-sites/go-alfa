import TitleSection from "../islands/TitleSection.tsx";

import ContactSection, {
    ContactProps,
    DaysOfWeek,
} from "site/islands/ContactSection.tsx";

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
    }: ContactProps,
) => {
    return (
        <div
            id={"contact"}
            class={"lg:container md:max-w-7xl lg:px-auto px-4 pb-12 "}
        >
            <TitleSection title={title} />
            <ContactSection
                {...{
                    title,
                    subtitle,
                    description,
                    cta,
                    placement,
                    image,
                    daysOfWeek,
                    startTime,
                    endTime,
                }}
            />
        </div>
    );
};

export default Contact;

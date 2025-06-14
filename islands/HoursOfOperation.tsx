import { useState } from "preact/hooks";
import { DaysOfWeek } from "site/sections/Contact.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
    daysOfWeek: DaysOfWeek[];
    startTime: string;
    endTime: string;
}

const getDayAndHour = () => {
    const daysOfWeek: Record<string, string> = {
        Sunday: "Domingo",
        Monday: "Segunda-feira",
        Tuesday: "Terça-feira",
        Wednesday: "Quarta-feira",
        Thursday: "Quinta-feira",
        Friday: "Sexta-feira",
        Saturday: "Sábado",
    };

    const today = new Date();
    const englishDay = today.toLocaleString("en-US", { weekday: "long" });

    const dayOfWeek = daysOfWeek[englishDay];
    const hours = today.getHours();
    const isOperating = hours >= 8 && hours < 17 && englishDay !== "Saturday" &&
        englishDay !== "Sunday";

    return {
        dayOfWeek,
        isOperating,
    };
};

const HoursOfOperation = ({ daysOfWeek, startTime, endTime }: Props) => {
    const [open, setOpen] = useState(false);
    const { dayOfWeek, isOperating } = getDayAndHour();

    return (
        <div>
            {!open
                ? (
                    <div class={"flex items-center gap-2 cursor-pointer"}>
                        {isOperating
                            ? (
                                <>
                                    <p>Aberto Hoje</p>
                                    <span class={"text-primary font-bold"}>
                                        {`${startTime} - ${endTime}`}
                                    </span>
                                </>
                            )
                            : (
                                <>
                                    <p>Fechado Hoje</p>
                                    <span class={"text-primary font-bold"}>
                                        {`${startTime} - ${endTime}`}
                                    </span>
                                </>
                            )}
                        <button onClick={() => setOpen(!open)}>
                            <Icon
                                id="ChevronDown"
                                size={16}
                                strokeWidth={0.1}
                            />
                        </button>
                    </div>
                )
                : (
                    <div>
                        {daysOfWeek.map((day, index) => (
                            <div class={"flex gap-4 items-center"}>
                                <p
                                    class={`${
                                        day.dayOfWeek === dayOfWeek
                                            ? "text-primary"
                                            : ""
                                    }`}
                                >
                                    {day.dayOfWeek.slice(0, 3) + "."}
                                </p>
                                <span class={"text-primary font-bold "}>
                                    {`${startTime} - ${endTime}`}
                                </span>
                                {index === 0 && (
                                    <button onClick={() => setOpen(!open)}>
                                        <Icon
                                            id="ChevronUp"
                                            size={16}
                                            strokeWidth={0.1}
                                        />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
        </div>
    );
};

export default HoursOfOperation;

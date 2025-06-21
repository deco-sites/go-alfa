import { useState } from "preact/hooks";
import { DaysOfWeek } from "site/sections/Contact.tsx";
import Icon from "site/components/ui/Icon.tsx";
import CustomIcon from "site/components/ui/lucide-icon.tsx";

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
                    <div
                        class={"flex items-center gap-2 cursor-pointer transition-all duration-300"}
                    >
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
                                </>
                            )}
                        <button onClick={() => setOpen(!open)}>
                            <CustomIcon
                                name="ChevronDown"
                                size={16}
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
                                            ? "text-secondary"
                                            : ""
                                    }`}
                                >
                                    {day.dayOfWeek.slice(0, 3) + "."}
                                </p>
                                {day.dayOfWeek === "Domingo" ||
                                        day.dayOfWeek === "Sábado"
                                    ? <p>Fechado</p>
                                    : (
                                        <p>
                                            {startTime} - {endTime}
                                        </p>
                                    )}
                                {index === 0 && (
                                    <button onClick={() => setOpen(!open)}>
                                        <CustomIcon
                                            name="ChevronUp"
                                            size={16}
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

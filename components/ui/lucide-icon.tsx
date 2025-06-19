import { icons } from "lucide-preact";

export interface LucideIconProps {
    name: string;
    color?: string;
    size?: number;
}

const LucideIcon = ({ name, color, size }: LucideIconProps) => {
    const LucideIcon = icons[name as keyof typeof icons];

    return <LucideIcon color={color} size={size} />;
};
export default LucideIcon;

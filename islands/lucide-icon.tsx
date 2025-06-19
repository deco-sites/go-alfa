import { icons } from "lucide-preact";

export interface LucideIconProps {
    name: string;
    color?: string;
    size?: number;
}

const CustomIcon = ({ name, color = "#3A98D3", size }: LucideIconProps) => {
    const iconKey = name.charAt(0).toUpperCase() + name.slice(1);
    const LucideIcon = icons[iconKey as keyof typeof icons];

    return <LucideIcon color={color} size={size} />;
};
export default CustomIcon;

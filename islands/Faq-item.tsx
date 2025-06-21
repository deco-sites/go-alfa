import CustomIcon from "site/components/ui/lucide-icon.tsx";

export interface FaqItemProps {
    question: string;
    /** @format rich-text */
    answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
    return (
        <details class="group border-b border-primary/5">
            <summary class="text-lg cursor-pointer py-6 flex">
                <span class="flex-auto text-xl font-medium group-open:text-secondary transition-colors duration-400">
                    {question}
                </span>
                <span class="flex-none transition-all duration-300 group-open:rotate-180 max-h-[32px] bg-secondary group-open:bg-white/5 rounded-full p-2">
                    <CustomIcon name="chevronDown" color="#fff" size={16} />
                </span>
            </summary>

            <p
                class="leading-relaxed mb-6 group-open:animate-fadeIn text-primary/60 font-medium text-sm md:text-base"
                dangerouslySetInnerHTML={{ __html: answer }}
            >
            </p>
        </details>
    );
};

export default FaqItem;

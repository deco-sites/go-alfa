import { FaqItemProps } from "site/islands/Faq-item.tsx";
import TitleSection from "../islands/TitleSection.tsx";
import FaqList from "site/islands/FaqList.tsx";

export interface Props {
  title?: string;
  subTitle?: string;
  description?: string;
  questions?: FaqItemProps[];
}

export default function BlogPosts({
  title = "FAQ",
  subTitle,
  description,
  questions = [
    {
      question: "What is the refund policy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ],
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28 flex flex-col items-center overflow-hidden">
      <TitleSection
        title={title}
        subtitle={subTitle}
        description={description}
      />
      <FaqList faq={questions} />
    </div>
  );
}

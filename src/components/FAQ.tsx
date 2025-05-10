import { sanityFetch } from '@/sanity/lib/live';
import { FAQS_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = async ({ className }: { className?: string }) => {
  const { data: faqs } = await sanityFetch({ query: FAQS_QUERY });

  if (!faqs) return null;

  return (
    <div
      className={clsx(
        'flex flex-col md:flex-row gap-5 md:justify-around bg-brand-cream/80 p-3 text-brand-dark-gray',
        className,
      )}
    >
      <p className="text-fs-500 font-semibold text-center md:text-left">
        Frequently asked questions
      </p>

      <div className="flex-1">
        {faqs.faqs?.map((faq, index) => (
          <Accordion type="single" collapsible className="w-full" key={index}>
            <AccordionItem value={`item-${index + 1}`}>
              <AccordionTrigger className="text-fs-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

import type { ComponentProps } from "react";

type FAQProps = ComponentProps<'div'> & {
    q: string,
    date: string
};

{/** サイドバーのFAQの項目 */}
export const FAQItem = (props: FAQProps) => {
  const { q, date, className, ...rest } = props;

    return (
        <div className={`bg-white pt-3 pb-2 px-4 rounded-16 ${className ?? ''}`} {...rest}>
            <p className='text-lg text-[#1A1A1A] pr-1'>{q}</p>
            <span className='block text-base text-right text-[#333333]'>{date}</span>
        </div>
    );
}

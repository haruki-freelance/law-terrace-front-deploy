import { Divider } from "../divider/divider";
import flagOn from '~/assets/images/flag-on.svg';
import flagOff from '~/assets/images/flag-off.svg';
import type { ComponentProps, MouseEvent, MouseEventHandler } from "react";
import { FlagMark } from "../flag-mark/flag-mark";

type ArticleItemProps = ComponentProps<'div'> & {
    title: string;
    content: string;
    updDatetime: string;
    category: string;
    isNew: boolean;
    isFlagOn: boolean;
    onFlagClick: (v: boolean) => void;
};

{/** 記事一覧の項目 */}
export function ArticleItem(props: ArticleItemProps) {
    const { title, content, updDatetime, category, isNew, isFlagOn, onFlagClick, onClick, ...rest } = props;
    const onItemClick = (event: MouseEvent<HTMLDivElement> | undefined) => {
        if (!!event) {
            const targetEl = event.target as HTMLElement;
            if (targetEl.classList.contains('flag')) {
                event.preventDefault();
                return;
            }

            if (!!onClick) {
                onClick(event);
            }
        }
    };

    return (
        <div onClick={onItemClick} {...rest}>
            <div className='flex flex-row bg-white w-full pt-5 pb-3.5 hover:bg-solid-gray-50 cursor-pointer'>
                <div className='flex flex-col items-start justify-center w-[6%] md:w-[3%]'>
                    <span className={`${isNew === false ? 'hidden' : ''} ml-2 before:content-[""] before:block before:w-2 before:h-2 before:bg-[#FB5B01] before:rounded-full`}></span>
                </div>
                <div className='flex flex-col w-[55%] md:w-[71%] pr-4 justify-center'>
                    <span className='text-lg font-bold'>{title}</span>
                    <p className='text-base line-clamp-2 md:truncate'>{content}</p>
                </div>
                <div className='flex flex-col pr-3 w-[33%] md:w-[20%] items-end justify-center'>
                    <span className='text-base'>{updDatetime}</span>
                    <span className='text-base'>{category}</span>
                </div>
                <div className='flex flex-col w-[6%] items-end justify-center'>
                    <FlagMark className='flag mr-1' isFlagOn={isFlagOn} onFlagClick={onFlagClick} />
                </div>
            </div>
            <Divider color="gray-420" />
        </div>
    );
}

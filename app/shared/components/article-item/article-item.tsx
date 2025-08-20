import { Divider } from "../divider/divider";
import flagOn from '~/assets/images/flag-on.svg';
import flagOff from '~/assets/images/flag-off.svg';

{/** 記事一覧の項目 */}
export function ArticleItem({ title, content, updDatetime, category, isNew, isFlagOn } : 
        { title: string, content: string, updDatetime: string, category: string, isNew: boolean, isFlagOn: boolean }) {
    return (
        <>
            <div className='flex flex-row bg-white w-full pt-5 pr-2 pb-3.5 pl-1'>
                <div className='flex flex-col items-start justify-center w-[3%]'>
                    <span className={`${isNew === false ? 'hidden' : ''} ml-1 before:content-[""] before:block before:w-2 before:h-2 before:bg-[#FB5B01] before:rounded-full`}></span>
                </div>
                <div className='flex flex-col w-[71%] pr-4 justify-center'>
                    <span className='text-lg font-bold'>{title}</span>
                    <p className='text-base truncate'>{content}</p>
                </div>
                <div className='flex flex-col w-[20%] items-end justify-center'>
                    <span className='text-base'>{updDatetime}</span>
                    <span className='text-base'>{category}</span>
                </div>
                <div className='flex flex-col w-[6%] items-end justify-center'>
                    <img src={isFlagOn ? flagOn : flagOff} alt='フラグオフ' className='mr-1'/>
                </div>
            </div>
            <Divider color="gray-420" />
        </>
    );
}

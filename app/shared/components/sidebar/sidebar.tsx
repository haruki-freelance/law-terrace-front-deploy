import { HeaderTitle } from '../header-title/header-title';
import sort from '../../../assets/images/sort.svg';
import { Ul } from '../ul/ul';
import { Link } from '../link/link';
import { FAQItem } from '../faq/faq-item';

{/** 共通サイドバー */}
export function Sidebar() {
    return (
        <div className='hidden md:flex flex-col w-[27%] max-w-98 py-8 px-6'>
            {/** 利用方法 */}
            <section className='max-h-110 h-[45%] overflow-hidden'>
                <header className='flex justify-between'>
                    <HeaderTitle title='利用方法' />
                    <img src={sort} alt='ソート'/>
                </header>
                <div className='bg-white mt-4 rounded-8 h-[85%] overflow-y-auto'>
                    <Ul className='[&_:where(ol,ul)]:mt-1 [&_:where(ol,ul)]:-mb-1 [&_li]:py-4'>
                        <li>基本的な使用方法</li>
                        <Ul>
                            <li><Link href='' target='_blank'>初期設定を行う</Link></li>
                            <li><Link href='' target='_blank'>相談内容を確認する</Link></li>
                            <li><Link href='' target='_blank'>申請内容を整理する</Link></li>
                        </Ul>
                        <li><Link href='#'>センターとのやり取り方法（メール、電話、チャット等）</Link></li>
                        <li><Link href='#'>事件・書類検索の設定方法</Link></li>
                    </Ul>
                </div>
            </section>
            {/** FAQ */}
            <section className='mt-4 h-[45%] overflow-hidden'>
                <header className='flex justify-between'>
                    <HeaderTitle title='FAQ' />
                    <img src={sort} alt='ソート'/>
                </header>
                <div className='h-[85%] mt-4 overflow-y-auto'>
                    <FAQItem q={'Q. 申込みに使用する書式はどのようにして参照できますか...'} date={'2026年8月23日'}></FAQItem>
                    <FAQItem q={'Q. 書類上の記載事項の修正連絡方法について教えて下さい...'} date={'2026年8月23日'} className='mt-2'></FAQItem>
                    <FAQItem q={'Q. 申込みに使用する書式はどのようにして参照できますか...'} date={'2026年8月23日'} className='mt-2'></FAQItem>
                </div>
            </section>
        </div>
    );
}

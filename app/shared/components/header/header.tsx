import lawTerraceIcon from '../../../assets/images/law-terrace-icon.svg';
import account from '../../../assets/images/account.svg';
import { StatusItem } from '../status-item/status-item';
import { HamburgerMenuIconButton } from '../hamburger-menu-icon-button/hamburger-menu-icon-button';
import { CloseWithLabelIcon } from '../hamburger-menu-icon-button/close-with-label-icon';
import { HamburgerWithLabelIcon } from '../hamburger-menu-icon-button/hamburger-with-label-icon';
import { useId, useState } from 'react';

 {/* 共通ヘッダー */}
export function Header({ todo, inProgress, complete, fullName } : { todo: number, inProgress: number, complete: number, fullName: string }) {
    const sampleJaId = useId();
    const [isMenuJaOpen, setIsMenuJaOpen] = useState(false);

    return (
        <header className='flex items-center justify-between py-4.5 pr-2 pl-3 md:pr-4 md:pl-8'>
            {/* 法テラスロゴの表示 */}
            <img className='block min-w-24.5 min-h-5 w-[18%] h-[5%] md:w-34 md:h-8'
                src={lawTerraceIcon}
                alt='法テラス'
            />
            {/* 事件の進捗状況の表示 */}
            <div className='hidden md:flex items-center justify-between gap-12 text-[#666666] font-normal text-base'>
                <StatusItem name='未着手' count={todo} unit='件' />
                <StatusItem name='進行中' count={inProgress} unit='件' />
                <StatusItem name='完了' count={complete} unit='件' />
            </div>
            {/* プロフィール表示 */}
            <div className='hidden md:flex items-center justify-between gap-4'>
                <span className='text-lg'>{fullName}</span>
                <img className='bg-[#F0F9FF] px-2 pt-1.5 pb-1.5'
                    src={account}
                    alt='プロフィール' />
            </div>
            <div className='relative md:hidden'>
                <HamburgerMenuIconButton
                className='hover:outline hover:outline-black'
                aria-controls={`${sampleJaId}-menu`}
                aria-expanded={isMenuJaOpen}
                onClick={() => setIsMenuJaOpen(!isMenuJaOpen)}
                >
                {isMenuJaOpen ? <CloseWithLabelIcon /> : <HamburgerWithLabelIcon />}
                </HamburgerMenuIconButton>
                {isMenuJaOpen && (
                <div
                    className='absolute h-40 w-44 border border-solid-gray-420 p-4 bg-white right-0'
                    id={`${sampleJaId}-menu`}
                >
                    サンプルメニュー
                </div>
                )}
            </div>
        </header>
    );
}

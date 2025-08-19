import lawTerraceIcon from "../../../assets/images/law-terrace-icon.svg";
import account from "../../../assets/images/account.svg";
import { StatusItem } from "../status-item/status-item";

 {/* 共通ヘッダー */}
export function Header({ todo, inProgress, complete, fullName } : { todo: number, inProgress: number, complete: number, fullName: string }) {
    return (
        <header className="flex items-center justify-between py-4.5 pr-4 pl-8">
            {/* 法テラスロゴの表示 */}
            <img className="block w-34 h-8"
                src={lawTerraceIcon}
                alt="法テラス"
            />
            {/* 事件の進捗状況の表示 */}
            <div className="flex items-center justify-between gap-12 text-[#666666] font-normal text-base">
                <StatusItem name='未着手' count={todo} unit='件' />
                <StatusItem name='進行中' count={inProgress} unit='件' />
                <StatusItem name='完了' count={complete} unit='件' />
            </div>
            {/* プロフィール表示 */}
            <div className="flex items-center justify-between gap-4">
                <span className="text-lg">{fullName}</span>
                <img className="bg-[#F0F9FF] px-2 pt-1.5 pb-1.5"
                    src={account}
                    alt="プロフィール" />
            </div>
        </header>
    );
}
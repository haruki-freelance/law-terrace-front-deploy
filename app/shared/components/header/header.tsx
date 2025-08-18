import lawTerraceIcon from "../../../assets/images/law-terrace-icon.svg";
import account from "../../../assets/images/account.svg";

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
                <div className="flex items-baseline gap-1">
                    <span>未着手</span>
                    <span className="text-3xl text-[#00118F] font-bold">{todo}</span>
                    <span>件</span>
                </div>
                <div className="flex items-baseline gap-1">
                    <span>進行中</span>
                    <span className="text-3xl text-[#00118F] font-bold">{inProgress}</span>
                    <span>件</span>
                </div>
                <div className="flex items-baseline gap-1">
                    <span>完了</span>
                    <span className="text-3xl text-[#00118F] font-bold">{complete}</span>
                    <span>件</span>
                </div>
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
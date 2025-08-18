import lawTerraceIcon from "../../../assets/images/law-terrace-icon.svg";
import account from "../../../assets/images/account.svg";

import './header.css';

 {/* 共通ヘッダー */}
export function Header({ todo, inProgress, complete, fullName } : { todo: number, inProgress: number, complete: number, fullName: string }) {
    return (
        <header>
            {/* 法テラスロゴの表示 */}
            <img
                src={lawTerraceIcon}
                alt="法テラス"
            />
            {/* 事件の進捗状況の表示 */}
            <div>
                <div>
                    <span>未着手</span>
                    <span className="count">{todo}</span>
                    <span>件</span>
                </div>
                <div>
                    <span>進行中</span>
                    <span className="count">{inProgress}</span>
                    <span>件</span>
                </div>
                <div>
                    <span>完了</span>
                    <span className="count">{complete}</span>
                    <span>件</span>
                </div>
            </div>
            {/* プロフィール表示 */}
            <div>
                <span className="full-name">{fullName}</span>
                <img 
                    src={account}
                    alt="プロフィール" />
            </div>
        </header>
    );
}
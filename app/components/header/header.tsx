import lawTerraceIcon from "../../assets/images/law-terrace-icon.svg";

export function Header() {
    return (
        <div className="flex items-center justify-center pt-4 pb-4">
            <img
              src={lawTerraceIcon}
              alt="法テラス"
              className="block w-34 h-8"
            />
        </div>
    );
}
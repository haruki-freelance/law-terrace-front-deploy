{/** ヘッダータイトル */}
export function HeaderTitle({ title } : { title : string }) {
    return (
        <span className="flex items-center text-lg text-[#333333] font-bold
                            before:content-[''] before:block before:w-2 before:h-5.5 before:bg-[#00428C] before:mr-2">{title}</span>
    );
}

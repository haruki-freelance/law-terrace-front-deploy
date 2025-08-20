import { useState } from 'react';

/** 一覧検索用の検索タグ */
export function SearchTag({ title, isSelected } : { title: string, isSelected: boolean }) {
    const [selected, setSelected] = useState(isSelected);

    return (
        <button className={`flex items-center justify-center ${selected ? 'bg-light-blue-100' : 'bg-white'} 
                py-1.5 px-3 rounded-6 border border-light-blue-1000 
                text-base font-bold text-light-blue-1000`} onClick={() => setSelected(!selected) }>
            {title}
        </button>
    );
}

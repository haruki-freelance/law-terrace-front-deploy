{/** ステータス項目 */}
export const StatusItem = ({ name, count, unit } : { name: string, count: number, unit: string }) => {
    return (
        <div className="flex items-baseline gap-1">
            <span>{name}</span>
            <span className="text-3xl text-[#00118F] font-bold">{count}</span>
            <span>{unit}</span>
        </div>
    );
}

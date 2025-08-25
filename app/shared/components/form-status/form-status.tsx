import type { ComponentProps } from "react";

/** 入力ステータス */
export enum InputStatus {
    InProgress = '作成中',
    Empty = '未入力'
}

/** フォームのプロパティ */
type FormStatusProps = ComponentProps<'span'> & {
    status: InputStatus
};

/** フォームの入力状態のステータスを示す部品 */
export const FormStatus = (props: FormStatusProps) => {
    const { status, className, ...rest } = props;
    let bgColor = 'bg-solid-gray-100';
    switch (props.status) {
        case InputStatus.InProgress: 
            bgColor = 'bg-light-blue-100';
            break;
        case InputStatus.Empty:
        default:
            break;
    }

    return (
        <span className={`${bgColor} rounded-16 py-0.5 px-2.5 text-base font-normal ${className ?? ''}`} {...rest}>{status}</span>
    );
};

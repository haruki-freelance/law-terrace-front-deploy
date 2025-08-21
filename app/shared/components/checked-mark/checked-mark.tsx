import type { ComponentProps } from 'react';
import checkBadge from '~/assets/images/check-badge.svg';

type CheckedMarkProps = ComponentProps<'img'> & {
    isChecked: boolean
};

/** ☑マークの部品 */
export function CheckedMark(props: CheckedMarkProps) {
    const { isChecked, className, ...rest } = props;

    return (
        isChecked ? <img src={checkBadge} className={`w-6 h-6 ${className ?? ''}`} {...rest} /> : <></>
    );
}
import flagOn from '~/assets/images/flag-on.svg';
import flagOff from '~/assets/images/flag-off.svg';
import { useState, type ComponentProps } from 'react';

type FlagMarkProps = ComponentProps<'img'> & {
    isFlagOn: boolean;
    onFlagClick: (v: boolean) => void;
};

/** フラグ部品 */
export const FlagMark = (props: FlagMarkProps) => {
    const { isFlagOn, className, onFlagClick, ...rest } = props;
    const [on, setOn] = useState(isFlagOn);
    const onClick = () => {
        const newVal = !on; 
        onFlagClick(newVal);
        setOn(newVal);
    };

    return (<img src={on ? flagOn : flagOff} alt='フラグ' className={`cursor-pointer ${className ?? ''}`} onClick={onClick} {...rest} />);
};

import { defaultProps, IProps, propTypes } from './config';
import { FC } from 'react';

export const Container: FC<IProps> = ({className, onClick}) => {

    return(
        <div className={`${className}__container`} onClick={onClick}>
            
        </div>
    )

}
import { defaultProps, IProps, propTypes } from './config'

export const Btn = ({
    className,
    label,
    onClick
}: IProps) => {
    return (
        <button className={className} onClick={onClick}>
            <span className={`${className}__label`}>{label}</span>
        </button>
    )
}


Btn.defaultProps = defaultProps
Btn.propTypes = propTypes
import PropTypes from 'prop-types';
import { MouseEventHandler } from 'react';


export interface IProps {
    className?: string;
    label?: string;
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const defaultProps = {
    className: "btn",
    label: "label",
    onClick: new Function()
}

export const propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
}
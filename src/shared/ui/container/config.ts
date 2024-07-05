import PropTypes from 'prop-types';
import { MouseEventHandler } from 'react';


export interface IProps {
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>
}

export const defaultProps = {
    className: "container",
    onClick: new Function()
}

export const propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
}
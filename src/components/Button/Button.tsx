import './Button.scss';
import React, { ButtonHTMLAttributes, Component, ReactNode } from 'react';

export interface ButtonPropsI extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

class Button extends Component<ButtonPropsI, {}> {
    render = () => {
        const { children, ...props } = this.props;

        return (
            <button {...props} className="button">
                {children}
            </button>
        );
    };
}

export default Button;

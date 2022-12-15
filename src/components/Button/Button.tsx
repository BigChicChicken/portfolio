import './Button.scss';
import React, { ButtonHTMLAttributes, Component, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

class Button extends Component<ButtonProps, {}> {
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

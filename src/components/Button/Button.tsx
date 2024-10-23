import './Button.scss';
import React, { ButtonHTMLAttributes, Component, ReactNode } from 'react';

export type ButtonTheme = 'Dark' | 'Light';

export interface ButtonPropsI extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    theme?: ButtonTheme;
}

class Button extends Component<ButtonPropsI, {}> {
    static defaultProps: Partial<ButtonPropsI> = {
        theme: 'Dark',
    };

    render = () => {
        const { children, theme, ...props } = this.props;

        return (
            <button {...props} data-theme={theme} className="button">
                {children}
            </button>
        );
    };
}

export default Button;

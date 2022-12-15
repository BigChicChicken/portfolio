import './ButtonGroup.scss';
import React, { Component, ReactNode } from 'react';

export interface ButtonGroupProps {
    children: ReactNode;
}

class ButtonGroup extends Component<ButtonGroupProps, {}> {
    render = () => {
        const { children } = this.props;

        return <div className="button-group">{children}</div>;
    };
}

export default ButtonGroup;

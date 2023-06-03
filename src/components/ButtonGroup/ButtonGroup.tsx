import './ButtonGroup.scss';
import React, { Component, ReactNode } from 'react';

export interface ButtonGroupPropsI {
    children: ReactNode;
}

class ButtonGroup extends Component<ButtonGroupPropsI, {}> {
    render = () => {
        const { children } = this.props;

        return <div className="button-group">{children}</div>;
    };
}

export default ButtonGroup;

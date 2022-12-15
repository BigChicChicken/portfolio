import './CounterAnimation.scss';
import React, { Component } from 'react';

export interface CounterAnimationProps {
    number: number;
    duration?: number;
    delay?: number;
}

class CounterAnimation extends Component<CounterAnimationProps, {}> {
    render() {
        const { number, duration, delay } = this.props;

        const style = {
            '--number': number,
            transition: `--number ${duration ?? 1000}ms ease-in-out ${
                delay ?? 0
            }ms`,
        } as React.CSSProperties;

        return <span style={style} className="counter-animation" />;
    }
}

export default CounterAnimation;

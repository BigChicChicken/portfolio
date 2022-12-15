import './ScrollAnimation.scss';
import React, { Component } from 'react';

class ScrollAnimation extends Component<{}, {}> {
    render = () => {
        return (
            <div className="scroll-animation-container">
                <svg
                    className="scroll-animation-container_chevron"
                    viewBox="0 0 16 8"
                >
                    <path d="m 0 0 l 0 4 l 8 4 l 8 -4 l 0 -4 l -8 4 l -8 -4" />
                </svg>
                <svg
                    className="scroll-animation-container_chevron"
                    viewBox="0 0 16 8"
                >
                    <path d="m 0 0 l 0 4 l 8 4 l 8 -4 l 0 -4 l -8 4 l -8 -4" />
                </svg>
                <svg
                    className="scroll-animation-container_chevron"
                    viewBox="0 0 16 8"
                >
                    <path d="m 0 0 l 0 4 l 8 4 l 8 -4 l 0 -4 l -8 4 l -8 -4" />
                </svg>
            </div>
        );
    };
}

export default ScrollAnimation;

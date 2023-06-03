import React, { Component, JSX } from 'react';

export interface TransitionPropsI {
    children: JSX.Element;
    in: boolean;
    mode: 'translate' | 'grow' | 'fade' | 'scale';
    direction?: 'top' | 'right' | 'bottom' | 'left';
    duration?: number;
    delay?: {
        show?: number;
        hide?: number;
    };
}

class Transition extends Component<TransitionPropsI, {}> {
    static DEFAULT_DURATION = 500;
    static DEFAULT_DELAY = 0;

    private Children: HTMLElement | null;

    constructor(props: Readonly<TransitionPropsI>) {
        super(props);

        this.Children = null;
    }

    componentDidMount = () => {
        const { in: visible } = this.props;

        this.update(visible);
    };

    shouldComponentUpdate = ({ in: nextVisible }: TransitionPropsI) => {
        const { in: visible } = this.props;

        if (visible !== nextVisible) {
            this.update(nextVisible);
        }

        return true;
    };

    update = (visible: boolean) => {
        const duration = this.props.duration ?? Transition.DEFAULT_DURATION;

        if (visible) {
            const delay = this.props.delay?.show ?? Transition.DEFAULT_DURATION;

            this.transition(duration, delay);
            this.show();
        } else {
            const delay = this.props.delay?.hide ?? Transition.DEFAULT_DURATION;

            this.transition(duration, delay);
            this.hide();
        }
    };

    transition = (duration: number, delay: number) => {
        if (this.Children) {
            this.Children.style.transition = `all ${duration}ms ease-in-out`;
            this.Children.style.transitionDelay = `${delay}ms`;
        }
    };

    show = () => {
        if (this.Children) {
            this.Children.style.opacity = '1';
            this.Children.style.transform = 'unset';
        }
    };

    hide = () => {
        const { mode, direction } = this.props;

        if (this.Children) {
            this.Children.style.opacity = '0';

            switch (mode) {
                case 'translate':
                    switch (direction) {
                        case 'top':
                            this.Children.style.transform =
                                'translate(0, 20px)';
                            break;
                        case 'right':
                            this.Children.style.transform =
                                'translate(-20px, 0)';
                            break;
                        case 'bottom':
                            this.Children.style.transform =
                                'translate(0, -20px)';
                            break;
                        default:
                            this.Children.style.transform =
                                'translate(20px, 0)';
                    }
                    break;

                case 'grow':
                    this.Children.style.transform = 'scale(0)';
                    break;

                case 'scale':
                    switch (direction) {
                        case 'top':
                            this.Children.style.transformOrigin = 'top';
                            this.Children.style.transform = 'scale(1, 0)';
                            break;
                        case 'right':
                            this.Children.style.transformOrigin = 'right';
                            this.Children.style.transform = 'scale(0, 1)';
                            break;
                        case 'bottom':
                            this.Children.style.transformOrigin = 'bottom';
                            this.Children.style.transform = 'scale(1, 0)';
                            break;
                        default:
                            this.Children.style.transformOrigin = 'left';
                            this.Children.style.transform = 'scale(0, 1)';
                    }
                    break;
            }
        }
    };

    render = () => {
        const { children } = this.props;

        return React.cloneElement(children, {
            ref: (element: HTMLElement) => {
                this.Children = element;
            },
        });
    };
}

export default Transition;

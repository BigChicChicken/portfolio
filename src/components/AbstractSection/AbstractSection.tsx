import { Component } from 'react';

export interface AbstractSectionState {
    visible: boolean;
}

abstract class AbstractSection<P, S> extends Component<
    P,
    S & AbstractSectionState
> {
    Section: Element | null;
    Observer: IntersectionObserver;

    protected constructor(props: P) {
        super(props);

        this.state = {
            ...this.state,
            visible: false,
        };

        this.Section = null;
        this.Observer = new IntersectionObserver(([{ isIntersecting }]) => {
            if (isIntersecting && this.Section) {
                this.setState(
                    (state) => ({
                        ...state,
                        visible: isIntersecting,
                    }),
                    this.observerCallback
                );

                this.Observer.unobserve(this.Section);
            }
        });
    }

    componentDidMount = () => {
        if (this.Section) {
            this.Observer.observe(this.Section);
        }
    };

    componentWillUnmount = () => {
        if (this.Section) {
            this.Observer.unobserve(this.Section);
        }
    };

    observerCallback = () => {};
}

export default AbstractSection;

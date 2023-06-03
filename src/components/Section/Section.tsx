import React, { Component, JSX } from 'react';
import Transition from 'components/Transition/Transition';
import Translator from 'components/Translator/Translator';

export interface SectionPropsI {
    id: string;
    title: {
        icon: string;
        text: string;
    };
    content: JSX.Element;
}

export interface SectionStateI {
    visible: boolean;
}

class Section extends Component<SectionPropsI, SectionStateI> {
    Section: HTMLElement | null = null;
    DisplayObserver: IntersectionObserver;

    constructor(props: SectionPropsI) {
        super(props);

        this.state = {
            ...this.state,
            visible: false,
        };

        this.DisplayObserver = new IntersectionObserver(
            ([{ isIntersecting }]) => {
                if (isIntersecting && this.Section) {
                    this.setState((state) => ({
                        ...state,
                        visible: isIntersecting,
                    }));

                    this.DisplayObserver.unobserve(this.Section);
                }
            }
        );
    }

    componentDidMount = () => {
        if (this.Section) {
            this.DisplayObserver.observe(this.Section);
        }
    };

    componentWillUnmount = () => {
        if (this.Section) {
            this.DisplayObserver.unobserve(this.Section);
        }
    };

    render() {
        const { id, title, content } = this.props;
        const { visible } = this.state;

        return (
            <section
                ref={(element: HTMLElement) => (this.Section = element)}
                id={id}
            >
                <div className="section-title">
                    <Transition mode="fade" in={visible}>
                        <div className="material-symbols-outlined icon">
                            {title.icon}
                        </div>
                    </Transition>

                    <Transition
                        mode="translate"
                        direction="right"
                        delay={{ show: 750 }}
                        in={visible}
                    >
                        <h3>
                            <Translator value={title.text} />
                        </h3>
                    </Transition>
                </div>

                <Transition
                    mode="translate"
                    direction="right"
                    delay={{ show: 850 }}
                    in={visible}
                >
                    {content}
                </Transition>
            </section>
        );
    }
}

export default Section;

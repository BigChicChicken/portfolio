import './Carousel.scss';
import React, { Component, ReactElement } from 'react';

interface CarouselProps {
    elements: {
        header: ReactElement;
        content: ReactElement;
    }[];
}

class Carousel extends Component<CarouselProps, {}> {
    private readonly Headers: HTMLElement[];
    private readonly Contents: HTMLElement[];
    private currentHeader: null | HTMLElement;
    private currentContent: null | HTMLElement;

    constructor(props: CarouselProps) {
        super(props);

        if (props.elements.length < 3) {
            throw new Error(
                'A minimum of 3 elements is required for the carousel.'
            );
        }

        this.Headers = [];
        this.Contents = [];
        this.currentHeader = null;
        this.currentContent = null;
    }

    componentDidMount() {
        this.onHeaderClick(0)();
    }

    onHeaderClick = (index: number) => () => {
        if (this.Headers[index] !== this.currentHeader) {
            if (this.currentHeader) {
                this.currentHeader.removeAttribute('aria-selected');
            }
            const header = this.Headers[index];
            header.setAttribute('aria-selected', 'true');
            this.currentHeader = header;

            if (this.currentContent) {
                this.currentContent.removeAttribute('aria-selected');
            }
            const content = this.Contents[index];
            content.setAttribute('aria-selected', 'true');
            this.currentContent = content;
        }
    };

    render = () => {
        const { elements } = this.props;

        return (
            <div className="carousel">
                <div className="headers">
                    {elements.map(({ header }, index) => (
                        <>
                            <div
                                ref={(element: any) =>
                                    (this.Headers[index] = element)
                                }
                                className="header"
                                onClick={this.onHeaderClick(index)}
                            >
                                {header}
                            </div>
                        </>
                    ))}
                </div>

                <div className="contents">
                    {elements.map(({ content }, index) => (
                        <>
                            <div
                                ref={(element: any) =>
                                    (this.Contents[index] = element)
                                }
                                className="content"
                            >
                                {content}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        );
    };
}

export default Carousel;

import './IframeWrapper.scss';
import React, { Component, ReactNode } from 'react';
import ReactDOM from 'react-dom';

export interface IframeWrapperPropsI {
    children: ReactNode;
    heads: ReactNode[];
}

class IframeWrapper extends Component<IframeWrapperPropsI, {}> {
    private iframe: HTMLIFrameElement | null = null;

    componentDidMount = () => {
        this.forceUpdate();
    };

    componentDidUpdate = () => {
        window.addEventListener('resize', this.resizeIframe);
        this.resizeIframe();
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.resizeIframe);
    };

    renderIframe = () => {
        const { children, heads } = this.props;
        const contentDocument = this.iframe?.contentDocument;

        if (contentDocument) {
            return [
                ...heads.map((head) => {
                    return ReactDOM.createPortal(head, contentDocument.head);
                }),
                ReactDOM.createPortal(children, contentDocument.body),
            ];
        }

        return [];
    };

    resizeIframe = () => {
        if (this.iframe) {
            const { contentDocument, parentElement } = this.iframe;

            if (contentDocument && parentElement) {
                const { scrollWidth: width, scrollHeight: height } =
                    contentDocument.body;
                const { offsetWidth: maxWidth } = parentElement;
                const ratio = maxWidth / width;

                this.iframe.style.setProperty('width', `${width}px`);
                this.iframe.style.setProperty('height', `${height}px`);
                this.iframe.style.setProperty(
                    'transform',
                    ratio > 1 ? 'none' : `scale(${ratio})`
                );
                parentElement.style.setProperty(
                    'height',
                    ratio > 1 ? `${height}px` : `${height * ratio}px`
                );
            }
        }
    };

    printIframe = () => {
        const contentWindow = this.iframe?.contentWindow;

        if (contentWindow) {
            contentWindow.print();
        }
    };

    render() {
        return (
            <div className="iframe-wrapper">
                <iframe
                    ref={(element: HTMLIFrameElement) =>
                        (this.iframe = element)
                    }
                >
                    {this.renderIframe()}
                </iframe>
            </div>
        );
    }
}

export default IframeWrapper;

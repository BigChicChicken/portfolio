import './CV.scss';
import React, { Component, ReactNode } from 'react';
import IframeWrapper from 'components/IframeWrapper/IframeWrapper';
import Button from 'components/Button/Button';

export interface CVState {
    visible: boolean;
}

export interface CVProps {
    children: ReactNode;
    style: ReactNode;
}

class CV extends Component<CVProps, CVState> {
    private IframeWrapper: IframeWrapper | null;

    constructor(props: CVProps) {
        super(props);

        this.state = {
            visible: false,
        };

        this.IframeWrapper = null;
    }

    show = () => {
        this.setState((state) => ({
            ...state,
            visible: true,
        }));
    };

    hide = () => {
        this.setState((state) => ({
            ...state,
            visible: false,
        }));
    };

    print = () => {
        if (this.IframeWrapper) {
            this.IframeWrapper.printIframe();
        }
    };

    render = () => {
        const { children, style } = this.props;
        const { visible } = this.state;

        if (!visible) {
            return null;
        }

        return (
            <div className="CV">
                <IframeWrapper
                    ref={(ref) => (this.IframeWrapper = ref)}
                    heads={[
                        style,
                        <>
                            <link
                                rel="stylesheet"
                                href="https://fonts.googleapis.com/css2?family=Roboto"
                            />
                        </>,
                        <>
                            <link
                                rel="stylesheet"
                                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                            />
                        </>,
                    ]}
                >
                    {children}
                </IframeWrapper>

                <div className="actions">
                    <Button type="button" onClick={this.print}>
                        <span className="material-symbols-outlined">print</span>
                    </Button>

                    <Button type="button" onClick={this.hide}>
                        <span className="material-symbols-outlined">close</span>
                    </Button>
                </div>
            </div>
        );
    };
}

export default CV;

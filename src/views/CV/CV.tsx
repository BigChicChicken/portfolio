import './CV.scss';
import React, { Component, ReactNode } from 'react';
import IframeWrapper from 'components/IframeWrapper/IframeWrapper';
import Button from 'components/Button/Button';
import compose from 'hocs/compose';
import withSearchParams, {
    WithSearchParamsProps,
} from 'hocs/withSearchParams/withSearchParams';

export interface CVProps extends WithSearchParamsProps {
    id: string;
    children: ReactNode;
    style: ReactNode;
}

export interface CVState {
    visible: boolean;
}

class CV extends Component<CVProps, CVState> {
    static readonly URL_KEY = 'cv';

    private IframeWrapper: IframeWrapper | null = null;

    constructor(props: CVProps) {
        super(props);

        const {
            id,
            searchParams: [urlSearchParams],
        } = this.props;

        this.state = {
            visible: urlSearchParams.get(CV.URL_KEY) === id,
        };
    }

    show = () => {
        this.setState(
            (state) => ({
                ...state,
                visible: true,
            }),
            () => {
                const {
                    id,
                    searchParams: [, setURLSearchParams],
                } = this.props;

                setURLSearchParams((prev) => {
                    prev.set(CV.URL_KEY, id);
                    return prev;
                }, {});
            }
        );
    };

    hide = () => {
        this.setState(
            (state) => ({
                ...state,
                visible: false,
            }),
            () => {
                const {
                    searchParams: [, setURLSearchParams],
                } = this.props;

                setURLSearchParams((prev) => {
                    prev.delete(CV.URL_KEY);
                    return prev;
                });
            }
        );
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
                    ref={(ref: IframeWrapper) => (this.IframeWrapper = ref)}
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

export default compose(withSearchParams())(CV);

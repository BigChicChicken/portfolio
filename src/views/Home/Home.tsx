import './Home.scss';
import React, { Component } from 'react';
import data from 'src/data';
import Translator from 'components/Translator/Translator';
import ScrollAnimation from 'components/ScrollAnimation/ScrollAnimation';
import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Transition from 'components/Transition/Transition';
import Modal from 'components/Modal/Modal';
import { withTranslation, WithTranslationProps } from 'react-i18next';
import compose from 'hocs/compose';
import CVCanadian from '../CV/Canadian/CVCanadian';

export interface HomePropsI extends WithTranslationProps {}

export interface HomeStateI {
    visible: boolean;
    showContact: boolean;
}

class Home extends Component<HomePropsI, HomeStateI> {
    private CVCanadian: CVCanadian | null = null;

    constructor(props: HomePropsI) {
        super(props);

        this.state = {
            visible: false,
            showContact: false,
        };
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState((state) => ({
                ...state,
                visible: true,
            }));
        }, 0);
    };

    onLanguageChange = (language: string) => () => {
        const { i18n } = this.props;
        if (i18n) {
            i18n.changeLanguage(language).catch(console.error);
        }
    };

    showContact = () => {
        this.setState((state) => ({
            ...state,
            showContact: true,
        }));
    };

    hideContact = () => {
        this.setState((state) => ({
            ...state,
            showContact: false,
        }));
    };

    render = () => {
        const { visible, showContact } = this.state;

        return (
            <>
                <section id="Home">
                    <div>
                        <ButtonGroup>
                            <Button onClick={this.onLanguageChange('fr')}>
                                FR
                            </Button>
                            <Button onClick={this.onLanguageChange('en')}>
                                EN
                            </Button>
                        </ButtonGroup>
                    </div>

                    <Transition mode="fade" in={visible}>
                        <div>
                            <div className="neon-sign">
                                <h1>{data.name}</h1>
                                <h2>
                                    <Translator value={data.description} />
                                </h2>
                            </div>

                            <ButtonGroup>
                                <Button
                                    theme="Light"
                                    onClick={() => {
                                        if (this.CVCanadian) {
                                            this.CVCanadian.show();
                                        }
                                    }}
                                >
                                    <Translator value="Consult my resume" />
                                </Button>

                                <Button
                                    theme="Light"
                                    onClick={this.showContact}
                                >
                                    <Translator value="Contact me" />
                                </Button>

                                <Modal
                                    title={<Translator value="Contact me" />}
                                    show={showContact}
                                    onClose={this.hideContact}
                                >
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href={data.tel.url}
                                    >
                                        <div className="material-symbols-outlined icon">
                                            {data.tel.icon}
                                        </div>
                                        {data.tel.text}
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href={data.email.url}
                                    >
                                        <div className="material-symbols-outlined icon">
                                            {data.email.icon}
                                        </div>
                                        {data.email.text}
                                    </a>
                                </Modal>
                            </ButtonGroup>
                        </div>
                    </Transition>

                    <div>
                        <ScrollAnimation />
                    </div>
                </section>

                <CVCanadian
                    ref={(element: CVCanadian) => {
                        this.CVCanadian = element;
                    }}
                />
            </>
        );
    };
}

export default compose(withTranslation())(Home);

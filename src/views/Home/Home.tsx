import './Home.scss';
import React, { Component } from 'react';
import data from 'src/data';
import Translator from 'components/Translator/Translator';
import ScrollAnimation from 'components/ScrollAnimation/ScrollAnimation';
import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import i18n from 'i18next';
import Transition from 'components/Transition/Transition';

export interface HomeState {
    visible: boolean;
}

class Home extends Component<{}, HomeState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            visible: false,
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
        i18n.changeLanguage(language).catch(console.error);
    };

    render = () => {
        const { visible } = this.state;

        return (
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

                <div>
                    <Transition mode="fade" in={visible}>
                        <div className="neon-sign">
                            <h1>{data.name}</h1>
                            <h2>
                                <Translator value={data.description} />
                            </h2>
                        </div>
                    </Transition>
                </div>

                <div>
                    <ScrollAnimation />
                </div>
            </section>
        );
    };
}

export default Home;

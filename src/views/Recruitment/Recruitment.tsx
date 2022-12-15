import './Recruitment.scss';
import React from 'react';
import data from 'src/data';
import Transition from 'components/Transition/Transition';
import Translator from 'components/Translator/Translator';
import CounterAnimation from 'components/CounterAnimation/CounterAnimation';
import AbstractSection from 'components/AbstractSection/AbstractSection';
import Button from 'components/Button/Button';
import CVFrench from 'views/CV/French/CVFrench';
import CVCanadian from 'views/CV/Canadian/CVCanadian';

export interface RecruitmentState {
    visible: boolean;
    number: number;
}

class Recruitment extends AbstractSection<{}, RecruitmentState> {
    private CVFrench: CVFrench | null;
    private CVCanadian: CVCanadian | null;

    constructor(props: {}) {
        super(props);

        this.state = {
            ...this.state,
            number: 0,
        };

        this.CVFrench = null;
        this.CVCanadian = null;
    }

    observerCallback = () => {
        this.setState((state) => ({
            ...state,
            number: data.recruitment.salary.value,
        }));
    };

    render() {
        const { visible, number } = this.state;

        return (
            <section
                ref={(element) => (this.Section = element)}
                id="Recruitment"
            >
                <div className="section-title">
                    <Transition mode="fade" in={visible}>
                        <div className="material-symbols-outlined icon">
                            {data.recruitment.icon}
                        </div>
                    </Transition>

                    <Transition
                        mode="translate"
                        direction="right"
                        delay={{ show: 750 }}
                        in={visible}
                    >
                        <h3>
                            <Translator value={data.recruitment.title} />
                        </h3>
                    </Transition>
                </div>

                <Transition
                    mode="translate"
                    direction="right"
                    in={visible}
                    delay={{ show: 850 }}
                >
                    <div>
                        <p className="text-box">
                            <Translator value={data.recruitment.text} />
                        </p>

                        <div className="status">
                            <p>
                                <Translator value="Current status" />
                                {':'}
                            </p>
                            <Translator value={data.status} />
                        </div>

                        <div className="salary">
                            <p>
                                <Translator value="Salary" />
                                {':'}
                            </p>
                            <CounterAnimation
                                number={number}
                                duration={2000}
                                delay={750}
                            />
                            {`${data.recruitment.salary.currency}/`}
                            <Translator
                                value={data.recruitment.salary.period}
                            />
                        </div>

                        <div className="cv-container">
                            <Button
                                onClick={() => {
                                    if (this.CVFrench) {
                                        this.CVFrench.show();
                                    }
                                }}
                            >
                                <Translator value="CV - French" />
                            </Button>

                            <Button
                                onClick={() => {
                                    if (this.CVCanadian) {
                                        this.CVCanadian.show();
                                    }
                                }}
                            >
                                <Translator value="CV - Canadian" />
                            </Button>
                        </div>
                    </div>
                </Transition>

                <CVFrench
                    ref={(element) => {
                        this.CVFrench = element;
                    }}
                />
                <CVCanadian
                    ref={(element) => {
                        this.CVCanadian = element;
                    }}
                />
            </section>
        );
    }
}

export default Recruitment;

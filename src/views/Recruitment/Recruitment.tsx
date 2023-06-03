import './Recruitment.scss';
import React, { Component } from 'react';
import data from 'src/data';
import Translator from 'components/Translator/Translator';
import Button from 'components/Button/Button';
import CVFrench from 'views/CV/French/CVFrench';
import CVCanadian from 'views/CV/Canadian/CVCanadian';
import Section from 'components/Section/Section';

export interface RecruitmentStateI {
    visible: boolean;
    number: number;
}

class Recruitment extends Component<{}, RecruitmentStateI> {
    private CVFrench: CVFrench | null = null;
    private CVCanadian: CVCanadian | null = null;

    constructor(props: {}) {
        super(props);

        this.state = {
            ...this.state,
            number: 0,
        };
    }

    render() {
        return (
            <>
                <Section
                    id="Recruitment"
                    title={{
                        icon: data.recruitment.icon,
                        text: data.recruitment.title,
                    }}
                    content={
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
                                {data.recruitment.salary.value}
                                {`${data.recruitment.salary.currency}/`}
                                <Translator
                                    value={data.recruitment.salary.period}
                                />
                            </div>

                            <div className="cv-container">
                                <Button
                                    onClick={() => {
                                        if (this.CVCanadian) {
                                            this.CVCanadian.show();
                                        }
                                    }}
                                >
                                    <div className="material-symbols-outlined icon">
                                        open_in_new
                                    </div>
                                    <Translator value="CV - Canadian" />
                                </Button>

                                <Button
                                    onClick={() => {
                                        if (this.CVFrench) {
                                            this.CVFrench.show();
                                        }
                                    }}
                                >
                                    <div className="material-symbols-outlined icon">
                                        open_in_new
                                    </div>
                                    <Translator value="CV - French" />
                                </Button>
                            </div>
                        </div>
                    }
                />

                <CVFrench
                    ref={(element: CVFrench) => {
                        this.CVFrench = element;
                    }}
                />

                <CVCanadian
                    ref={(element: CVCanadian) => {
                        this.CVCanadian = element;
                    }}
                />
            </>
        );
    }
}

export default Recruitment;

import './Recruitment.scss';
import React, { Component } from 'react';
import data from 'src/data';
import Translator from 'components/Translator/Translator';
import Button from 'components/Button/Button';
import CVCanadian from 'views/CV/Canadian/CVCanadian';
import Section from 'components/Section/Section';

export interface RecruitmentStateI {
    visible: boolean;
    number: number;
}

class Recruitment extends Component<{}, RecruitmentStateI> {
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

                            {data.status && (
                                <div className="status">
                                    <p>
                                        <Translator value="Current status" />
                                        {':'}
                                    </p>
                                    <Translator value={data.status} />
                                </div>
                            )}

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
                                    <Translator value="Consult my resume" />
                                </Button>
                            </div>
                        </div>
                    }
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

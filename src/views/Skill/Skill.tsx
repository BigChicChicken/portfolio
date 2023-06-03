import './Skill.scss';
import React, { Component } from 'react';
import data from 'src/data';
import Translator from 'components/Translator/Translator';
import Section from 'components/Section/Section';

class Skill extends Component<{}, {}> {
    render = () => {
        return (
            <Section
                id="Skill"
                title={{ icon: data.skills.icon, text: data.skills.title }}
                content={
                    <div>
                        {data.skills.data.map(({ category, items }) => (
                            <>
                                <div className="skills">
                                    <h4 className="title">
                                        <Translator value={category} />
                                    </h4>

                                    <div className="group">
                                        {items.map(({ name, svg }) => (
                                            <>
                                                <div className="text-box">
                                                    <img alt={name} src={svg} />
                                                    <label>{name}</label>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                }
            />
        );
    };
}

export default Skill;

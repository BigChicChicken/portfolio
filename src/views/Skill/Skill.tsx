import './Skill.scss';
import React from 'react';
import data from 'src/data';
import Transition from 'components/Transition/Transition';
import Translator from 'components/Translator/Translator';
import AbstractSection from 'components/AbstractSection/AbstractSection';

class Skill extends AbstractSection<{}, {}> {
    render = () => {
        const { visible } = this.state;

        return (
            <section ref={(element) => (this.Section = element)} id="Skill">
                <div className="section-title">
                    <Transition mode="fade" in={visible}>
                        <div className="material-symbols-outlined icon">
                            {data.skills.icon}
                        </div>
                    </Transition>

                    <Transition
                        mode="translate"
                        direction="right"
                        delay={{ show: 750 }}
                        in={visible}
                    >
                        <h3>
                            <Translator value={data.skills.title} />
                        </h3>
                    </Transition>
                </div>

                {data.skills.data.map(({ category, items }) => (
                    <>
                        <Transition
                            mode="translate"
                            direction="right"
                            in={visible}
                            delay={{ show: 850 }}
                        >
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
                        </Transition>
                    </>
                ))}
            </section>
        );
    };
}

export default Skill;

import './Diploma.scss';
import React from 'react';
import AbstractSection from 'components/AbstractSection/AbstractSection';
import Transition from 'components/Transition/Transition';
import data from 'src/data';
import Translator from 'components/Translator/Translator';

class Diploma extends AbstractSection<{}, {}> {
    render = () => {
        const { visible } = this.state;

        return (
            <section ref={(element) => (this.Section = element)} id="Diploma">
                <div className="section-title">
                    <Transition mode="fade" in={visible}>
                        <div className="material-symbols-outlined icon">
                            {data.diplomas.icon}
                        </div>
                    </Transition>

                    <Transition
                        mode="translate"
                        direction="right"
                        delay={{ show: 750 }}
                        in={visible}
                    >
                        <h3>
                            <Translator value={data.diplomas.title} />
                        </h3>
                    </Transition>
                </div>

                <Transition
                    mode="translate"
                    direction="bottom"
                    delay={{ show: 750 }}
                    in={visible}
                >
                    <div className="group">
                        {data.diplomas.data.map(({ name, speciality }) => (
                            <>
                                <div className="text-box">
                                    <h4 className="title">{name}</h4>
                                    <p>{speciality}</p>
                                </div>
                            </>
                        ))}
                    </div>
                </Transition>
            </section>
        );
    };
}

export default Diploma;

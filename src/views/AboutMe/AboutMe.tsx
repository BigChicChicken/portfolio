import './AboutMe.scss';
import React from 'react';
import data from 'src/data';
import Translator from 'components/Translator/Translator';
import Transition from 'components/Transition/Transition';
import Thumbnail from 'components/Thumbnail/Thumbnail';
import AbstractSection from 'components/AbstractSection/AbstractSection';

class AboutMe extends AbstractSection<{}, {}> {
    render = () => {
        const { visible } = this.state;

        return (
            <section ref={(element) => (this.Section = element)} id="AboutMe">
                <div className="section-title">
                    <Transition mode="fade" in={visible}>
                        <div className="material-symbols-outlined icon">
                            {data.about_me.icon}
                        </div>
                    </Transition>

                    <Transition
                        mode="translate"
                        direction="right"
                        delay={{ show: 750 }}
                        in={visible}
                    >
                        <h3>
                            <Translator value={data.about_me.title} />
                        </h3>
                    </Transition>
                </div>

                <Transition
                    mode="translate"
                    direction="right"
                    delay={{ show: 850 }}
                    in={visible}
                >
                    <div className="content">
                        <Thumbnail src={data.about_me.photo} alt={data.name} />
                        <div className="text-box">
                            <Translator value={data.about_me.text} />
                        </div>
                    </div>
                </Transition>
            </section>
        );
    };
}

export default AboutMe;

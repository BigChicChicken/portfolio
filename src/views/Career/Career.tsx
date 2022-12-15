import './Career.scss';
import React from 'react';
import data from 'src/data';
import Transition from 'components/Transition/Transition';
import Translator from 'components/Translator/Translator';
import Carousel from 'components/Carousel/Carousel';
import AbstractSection from 'components/AbstractSection/AbstractSection';

class Career extends AbstractSection<{}, {}> {
    render = () => {
        const { visible } = this.state;

        return (
            <section ref={(element) => (this.Section = element)} id="Career">
                <div className="section-title">
                    <Transition mode="fade" in={visible}>
                        <div className="material-symbols-outlined icon">
                            {data.career.icon}
                        </div>
                    </Transition>

                    <Transition
                        mode="translate"
                        direction="right"
                        delay={{ show: 750 }}
                        in={visible}
                    >
                        <h3>
                            <Translator value={data.career.title} />
                        </h3>
                    </Transition>
                </div>

                <Transition
                    mode="translate"
                    direction="bottom"
                    delay={{ show: 750 }}
                    in={visible}
                >
                    <div>
                        <Carousel
                            elements={data.career.data.map(
                                ({
                                    company,
                                    name,
                                    logo,
                                    location,
                                    domain,
                                    date: { begin, end },
                                    tasks,
                                }) => ({
                                    header: (
                                        <img
                                            className="text-box"
                                            src={logo}
                                            alt={company}
                                        />
                                    ),
                                    content: (
                                        <div className="text-box">
                                            <div className="job">
                                                <h4 className="company">
                                                    {company}
                                                </h4>
                                                <div className="date">
                                                    <time dateTime={begin}>
                                                        {begin}
                                                    </time>
                                                    {' - '}
                                                    {end ? (
                                                        <time dateTime={end}>
                                                            {end}
                                                        </time>
                                                    ) : (
                                                        <Translator value="Today" />
                                                    )}
                                                </div>
                                                <p className="domain-location">
                                                    <Translator
                                                        value={domain}
                                                    />
                                                    {', '}
                                                    <Translator
                                                        value={location}
                                                    />
                                                </p>
                                                <p className="name">
                                                    <Translator value={name} />
                                                </p>
                                                <ul className="task">
                                                    {tasks.map((task) => (
                                                        <>
                                                            <li>
                                                                <Translator
                                                                    value={task}
                                                                />
                                                            </li>
                                                        </>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ),
                                })
                            )}
                        />
                    </div>
                </Transition>
            </section>
        );
    };
}

export default Career;

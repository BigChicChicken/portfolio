import './Career.scss';
import React, { Component } from 'react';
import data from 'src/data';
import Translator from 'components/Translator/Translator';
import Carousel from 'components/Carousel/Carousel';
import Section from 'components/Section/Section';

class Career extends Component<{}, {}> {
    render = () => {
        return (
            <Section
                id="Career"
                title={{ icon: data.career.icon, text: data.career.title }}
                content={
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
                }
            />
        );
    };
}

export default Career;

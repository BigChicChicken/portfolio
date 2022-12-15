import style from './CVFrench.module.scss';
import React, { Component } from 'react';
import data from 'src/data';
import CV from 'views/CV/CV';
import Translator from 'components/Translator/Translator';

class CVFrench extends Component<{}, {}> {
    private CV: CV | null;

    constructor(props: {}) {
        super(props);

        this.CV = null;
    }

    show = () => {
        if (this.CV) {
            this.CV.show();
        }
    };

    render = () => {
        return (
            <CV
                ref={(element) => {
                    this.CV = element;
                }}
                style={<style type="text/css">{style}</style>}
            >
                <div className="page">
                    <div className="header">
                        <div className="content">
                            <div className="img-wrapper">
                                <img
                                    src={data.about_me.photo}
                                    alt={data.name}
                                />
                            </div>

                            <div>
                                <h1>{data.name}</h1>
                                <h2>
                                    <Translator value={data.description} />
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="body">
                        <div className="summary">
                            <Translator value={data.about_me.text} />
                        </div>

                        <div className="skills">
                            <div className="section-title">
                                <div className="material-symbols-outlined icon">
                                    {data.skills.icon}
                                </div>
                                <h3>
                                    <Translator value={data.skills.title} />
                                </h3>
                            </div>

                            <ul>
                                {data.skills.data.map(({ category, items }) => (
                                    <>
                                        <li>
                                            <h4>
                                                <Translator value={category} />
                                            </h4>
                                            <div className="grey-box">
                                                {items
                                                    .map(({ name }) => name)
                                                    .join(', ')}
                                                .
                                            </div>
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </div>

                        <div className="diplomas">
                            <div className="section-title">
                                <div className="material-symbols-outlined icon">
                                    {data.diplomas.icon}
                                </div>
                                <h3>
                                    <Translator value={data.diplomas.title} />
                                </h3>
                            </div>

                            <ul>
                                {data.diplomas.data.map(
                                    ({ name, speciality }) => (
                                        <>
                                            <li>
                                                <h4>{name}</h4>
                                                <p>{speciality}</p>
                                            </li>
                                        </>
                                    )
                                )}
                            </ul>
                        </div>

                        <div className="career">
                            <div className="section-title">
                                <div className="material-symbols-outlined icon">
                                    {data.career.icon}
                                </div>
                                <h3>
                                    <Translator value={data.career.title} />
                                </h3>
                            </div>

                            <ul>
                                {data.career.data.map(
                                    ({
                                        company,
                                        date: { begin, end },
                                        name,
                                        skills,
                                    }) => (
                                        <>
                                            <li>
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
                                                            <time
                                                                dateTime={end}
                                                            >
                                                                {end}
                                                            </time>
                                                        ) : (
                                                            <Translator value="Today" />
                                                        )}
                                                    </div>
                                                    <p className="name">
                                                        <Translator
                                                            value={name}
                                                        />
                                                    </p>
                                                    <p className="skills">
                                                        <div className="grey-box">
                                                            {skills.join(', ')}.
                                                        </div>
                                                    </p>
                                                </div>
                                            </li>
                                        </>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="content">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={data.linkedin.url}
                            >
                                <img
                                    className="qrcode"
                                    src={data.linkedin.image}
                                    alt="Linkedin"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={data.tel.url}
                            >
                                <div className="material-symbols-outlined icon">
                                    {data.tel.icon}
                                </div>
                                {data.tel.text}
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={data.email.url}
                            >
                                <div className="material-symbols-outlined icon">
                                    {data.email.icon}
                                </div>
                                {data.email.text}
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={data.location.url}
                            >
                                <div className="material-symbols-outlined icon">
                                    {data.location.icon}
                                </div>
                                {data.location.text}
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={data.github.url}
                            >
                                <img
                                    className="qrcode"
                                    src={data.github.image}
                                    alt="GitHub"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </CV>
        );
    };
}

export default CVFrench;

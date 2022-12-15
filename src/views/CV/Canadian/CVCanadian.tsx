import style from './CVCanadian.module.scss';
import React, { Component } from 'react';
import data from 'src/data';
import CV from 'views/CV/CV';
import Translator from 'components/Translator/Translator';

class CVCanadian extends Component<{}, {}> {
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

                            <div className="text">
                                <div>
                                    <h1>{data.name}</h1>
                                    <h2>
                                        <Translator value={data.description} />
                                    </h2>
                                </div>

                                <div>
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
                                </div>
                            </div>

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

                    <div className="body">
                        <div>
                            <div className="section-title">
                                <div className="material-symbols-outlined icon">
                                    {data.about_me.icon}
                                </div>
                                <h3>
                                    <Translator value={data.about_me.title} />
                                </h3>
                            </div>

                            <p>
                                <Translator value={data.about_me.text} />
                            </p>
                        </div>

                        <div>
                            <div className="section-title">
                                <div className="material-symbols-outlined icon">
                                    {data.skills.icon}
                                </div>
                                <h3>
                                    <Translator value={data.skills.title} />
                                </h3>
                            </div>

                            <table>
                                <tbody>
                                    {data.skills.data.map(
                                        ({ category, items }) => (
                                            <>
                                                <tr>
                                                    <td>
                                                        <h4>
                                                            <Translator
                                                                value={category}
                                                            />
                                                        </h4>
                                                    </td>
                                                    <td>
                                                        {items
                                                            .map(
                                                                ({ name }) =>
                                                                    name
                                                            )
                                                            .join(', ')}
                                                        .
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <div className="section-title">
                                <div className="material-symbols-outlined icon">
                                    {data.diplomas.icon}
                                </div>
                                <h3>
                                    <Translator value={data.diplomas.title} />
                                    {' / '}
                                    <Translator value="Equivalence" />
                                </h3>
                            </div>

                            <table>
                                <tbody>
                                    {data.diplomas.data.map(
                                        ({ name, speciality, equivalent }) => (
                                            <>
                                                <tr>
                                                    <td>
                                                        {name}
                                                        <br />
                                                        {speciality}
                                                    </td>
                                                    <td>{equivalent}</td>
                                                </tr>
                                            </>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="footer">
                        <p>{data.name}</p>
                        <p>1/2</p>
                    </div>
                </div>

                <div className="page">
                    <div className="body">
                        <div>
                            <div>
                                <div className="section-title">
                                    <div className="material-symbols-outlined icon">
                                        {data.career.icon}
                                    </div>
                                    <h3>
                                        <Translator value={data.career.title} />
                                    </h3>
                                </div>
                            </div>
                            {data.career.data.map(
                                ({
                                    company,
                                    domain,
                                    date: { begin, end },
                                    name,
                                    skills,
                                    tasks,
                                }) => (
                                    <>
                                        <div className="job">
                                            <h4 className="company">
                                                {company}
                                                {' ('}
                                                <Translator value={domain} />
                                                {')'}
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
                                            <p className="name">
                                                <Translator value={name} />
                                            </p>
                                            <p className="skills">
                                                {skills.join(', ')}.
                                            </p>
                                            <ul className="tasks">
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
                                    </>
                                )
                            )}
                        </div>
                    </div>

                    <div className="footer">
                        <p>{data.name}</p>
                        <p>2/2</p>
                    </div>
                </div>
            </CV>
        );
    };
}

export default CVCanadian;

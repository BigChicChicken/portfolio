import './Diploma.scss';
import React, { Component } from 'react';
import data from 'src/data';
import Section from 'components/Section/Section';

class Diploma extends Component<{}, {}> {
    render = () => {
        return (
            <Section
                id="Diploma"
                title={{ icon: data.diplomas.icon, text: data.diplomas.title }}
                content={
                    <div className="content">
                        {data.diplomas.data.map(({ name, speciality }) => (
                            <>
                                <div className="text-box">
                                    <h4 className="title">{name}</h4>
                                    <p>{speciality}</p>
                                </div>
                            </>
                        ))}
                    </div>
                }
            />
        );
    };
}

export default Diploma;

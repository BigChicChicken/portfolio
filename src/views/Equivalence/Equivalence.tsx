import './Equivalence.scss';
import React, { Component } from 'react';
import data from 'src/data';
import Section from 'components/Section/Section';

class Equivalence extends Component<{}, {}> {
    render = () => {
        return (
            <Section
                id="Equivalence"
                title={{
                    icon: data.equivalences.icon,
                    text: data.equivalences.title,
                }}
                content={
                    <div className="content">
                        {data.diplomas.data.map(
                            ({ equivalent: { name, speciality } }) => (
                                <>
                                    <div className="text-box">
                                        <h4 className="title">{name}</h4>
                                        <p>{speciality}</p>
                                    </div>
                                </>
                            )
                        )}
                    </div>
                }
            />
        );
    };
}

export default Equivalence;

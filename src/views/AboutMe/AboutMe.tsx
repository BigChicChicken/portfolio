import './AboutMe.scss';
import React, { Component } from 'react';
import data from 'src/data';
import Translator from 'components/Translator/Translator';
import Thumbnail from 'components/Thumbnail/Thumbnail';
import Section from 'components/Section/Section';

class AboutMe extends Component<{}, {}> {
    render = () => {
        return (
            <Section
                id="AboutMe"
                title={{ icon: data.about_me.icon, text: data.about_me.title }}
                content={
                    <div className="content">
                        <Thumbnail src={data.about_me.photo} alt={data.name} />
                        <div className="text-box">
                            <Translator value={data.about_me.text} />
                        </div>
                    </div>
                }
            />
        );
    };
}

export default AboutMe;

import './App.scss';
import React, { Component } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import messagesEn from 'resources/translations/messages.en.json';
import messagesFr from 'resources/translations/messages.fr.json';
import Home from 'views/Home/Home';
import AboutMe from 'views/AboutMe/AboutMe';
import Skill from 'views/Skill/Skill';
import Career from 'views/Career/Career';
import Recruitment from 'views/Recruitment/Recruitment';
import Diploma from 'views/Diploma/Diploma';

i18n.use(initReactI18next)
    .init({
        debug: true,
        resources: {
            en: {
                translation: messagesEn,
            },
            fr: {
                translation: messagesFr,
            },
        },
        lng: 'fr',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })
    .catch(console.error);

class App extends Component<{}, {}> {
    render = () => {
        return (
            <>
                <Home />
                <AboutMe />
                <Career />
                <Skill />
                <Diploma />
                <Recruitment />
            </>
        );
    };
}

export default App;

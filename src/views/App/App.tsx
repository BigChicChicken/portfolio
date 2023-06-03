import './App.scss';
import React, { Component } from 'react';
import i18n from 'services/i18n/i18n';
import compose from 'hocs/compose';
import withParams, { WithParamsProps } from 'hocs/withParams/withParams';
import Home from 'views/Home/Home';
import AboutMe from 'views/AboutMe/AboutMe';
import Skill from 'views/Skill/Skill';
import Career from 'views/Career/Career';
import Recruitment from 'views/Recruitment/Recruitment';
import Diploma from 'views/Diploma/Diploma';
import Equivalence from 'views/Equivalence/Equivalence';
import withLocation, {
    WithLocationProps,
} from 'hocs/withLocation/withLocation';
import withNavigate, {
    WithNavigateProps,
} from 'hocs/withNavigate/withNavigate';

export interface AppPropsI
    extends WithLocationProps,
        WithNavigateProps,
        WithParamsProps {}

class App extends Component<AppPropsI, {}> {
    componentDidMount() {
        const { location, navigate, params } = this.props;

        window.onpopstate = this.refreshPage();

        i18n.on('languageChanged', (language) => {
            const basePath = Object.entries(params).reduce(
                (accumulator, [key, value]) =>
                    value
                        ? accumulator.replace(`/${value}`, `/:${key}`)
                        : accumulator,
                location.pathname
            );

            const newPath = Object.entries({ ...params, language }).reduce(
                (accumulator, [key, value]) =>
                    accumulator.replace(`/:${key}`, `/${value}`),
                basePath
            );

            navigate({ ...location, pathname: newPath });
        });
    }

    refreshPage = () => () => {
        location.reload();
    };

    render = () => {
        return (
            <>
                <Home />
                <AboutMe />
                <Career />
                <Skill />
                <Diploma />
                <Equivalence />
                <Recruitment />
            </>
        );
    };
}

export default compose(withLocation(), withNavigate(), withParams())(App);

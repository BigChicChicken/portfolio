import './App.scss';
import React, { Component } from 'react';
import { LOOKUP_QUERY_STRING, SUPPORTED_LNGS } from 'services/i18n/i18n';
import compose from 'hocs/compose';
import withSearchParams, {
    WithSearchParamsProps,
} from 'hocs/withSearchParams/withSearchParams';
import { withTranslation, WithTranslationProps } from 'react-i18next';
import Home from 'views/Home/Home';
import AboutMe from 'views/AboutMe/AboutMe';
import Skill from 'views/Skill/Skill';
import Career from 'views/Career/Career';
import Recruitment from 'views/Recruitment/Recruitment';
import Diploma from 'views/Diploma/Diploma';
import Equivalence from 'views/Equivalence/Equivalence';

export interface AppPropsI
    extends WithSearchParamsProps,
        WithTranslationProps {}

class App extends Component<AppPropsI, {}> {
    private readonly navigatorLanguage: string;

    constructor(props: AppPropsI) {
        super(props);

        this.navigatorLanguage = navigator.language.substring(0, 2);
    }

    componentDidMount() {
        const {
            i18n,
            searchParams: [urlSearchParams, setURLSearchParams],
        } = this.props;

        window.onpopstate = this.refreshPage();

        if (i18n) {
            i18n.on('languageChanged', (language) => {
                setURLSearchParams((prev) => {
                    prev.set(LOOKUP_QUERY_STRING, language);
                    return prev;
                });
            });

            setTimeout(() => {
                if (!urlSearchParams.get(LOOKUP_QUERY_STRING)) {
                    i18n.changeLanguage(
                        SUPPORTED_LNGS.indexOf(this.navigatorLanguage)
                            ? this.navigatorLanguage
                            : 'fr'
                    ).catch(console.error);
                }
            }, 0);
        }
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

export default compose(withSearchParams(), withTranslation())(App);

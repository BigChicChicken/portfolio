import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import compose from 'hocs/compose';
import { withTranslation, WithTranslationProps } from 'react-i18next';

export interface NotFoundPropsI extends WithTranslationProps {}

class NotFound extends Component<NotFoundPropsI, {}> {
    private readonly navigatorLanguage: string;

    constructor(props: NotFoundPropsI) {
        super(props);

        this.navigatorLanguage = navigator.language.substring(0, 2);
    }

    render() {
        const { i18n } = this.props;

        let language =
            i18n?.options.supportedLngs &&
            i18n.options.supportedLngs.indexOf(this.navigatorLanguage)
                ? this.navigatorLanguage
                : 'en';

        return (
            <>
                <Navigate to={`/${language}`} replace />
            </>
        );
    }
}

export default compose(withTranslation())(NotFound);

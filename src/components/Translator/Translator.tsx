import React, { Component } from 'react';
import { withTranslation, WithTranslationProps } from 'react-i18next';

export interface TranslatorProps {
    value: string;
}

class Translator extends Component<
    TranslatorProps & WithTranslationProps,
    any
> {
    render = () => {
        const { i18n, value } = this.props;

        return <>{i18n?.t(value)}</>;
    };
}

export default withTranslation()(Translator);

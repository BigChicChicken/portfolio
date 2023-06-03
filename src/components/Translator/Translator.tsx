import React, { Component } from 'react';
import { withTranslation, WithTranslationProps } from 'react-i18next';

export interface TranslatorPropsI extends WithTranslationProps {
    value: string;
}

class Translator extends Component<TranslatorPropsI, any> {
    render = () => {
        const { i18n, value } = this.props;

        return <>{i18n?.t(value)}</>;
    };
}

export default withTranslation()(Translator);

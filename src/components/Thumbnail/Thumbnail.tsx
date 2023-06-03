import './Thumbnail.scss';
import React, { Component, ImgHTMLAttributes } from 'react';

export interface ThumbnailPropsI extends ImgHTMLAttributes<HTMLImageElement> {}

class Thumbnail extends Component<ThumbnailPropsI, {}> {
    protected readonly className: string = 'thumbnail thumbnail-default';

    render = () => {
        const { alt, ...props } = this.props;

        return (
            <img
                {...props}
                className={this.className}
                alt={alt ?? 'undefined'}
            />
        );
    };
}

export default Thumbnail;

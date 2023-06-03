import React from 'react';
import { Params, useParams } from 'react-router-dom';

export interface WithParamsProps {
    params: Readonly<Params>;
}

export default function withParams<
    P extends WithParamsProps = WithParamsProps
>() {
    return (WrappedComponent: React.ComponentType<P>) => {
        const displayName =
            WrappedComponent.displayName ||
            WrappedComponent.name ||
            'Component';

        const render = (
            props: Omit<P, keyof WithParamsProps>,
            ref: React.ForwardedRef<P>
        ) => {
            const params = useParams();

            return (
                <WrappedComponent ref={ref} {...(props as P)} params={params} />
            );
        };

        const ComponentWithParams = React.forwardRef(render);
        ComponentWithParams.displayName = `withParams(${displayName})`;

        return ComponentWithParams;
    };
}

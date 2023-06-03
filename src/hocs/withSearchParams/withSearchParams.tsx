import React from 'react';
import { SetURLSearchParams, useSearchParams } from 'react-router-dom';

export interface WithSearchParamsProps {
    searchParams: [URLSearchParams, SetURLSearchParams];
}

export default function withSearchParams<
    P extends WithSearchParamsProps = WithSearchParamsProps
>() {
    return (WrappedComponent: React.ComponentType<P>) => {
        const displayName =
            WrappedComponent.displayName ||
            WrappedComponent.name ||
            'Component';

        const render = (
            props: Omit<P, keyof WithSearchParamsProps>,
            ref: React.ForwardedRef<P>
        ) => {
            const searchParams = useSearchParams();

            return (
                <WrappedComponent
                    ref={ref}
                    {...(props as P)}
                    searchParams={searchParams}
                />
            );
        };

        const ComponentWithSearchParams = React.forwardRef(render);
        ComponentWithSearchParams.displayName = `withSearchParams(${displayName})`;

        return ComponentWithSearchParams;
    };
}

import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export interface WithNavigateProps {
    navigate: NavigateFunction;
}

export default function withNavigate<
    P extends WithNavigateProps = WithNavigateProps
>() {
    return (WrappedComponent: React.ComponentType<P>) => {
        const displayName =
            WrappedComponent.displayName ||
            WrappedComponent.name ||
            'Component';

        const render = (
            props: Omit<P, keyof WithNavigateProps>,
            ref: React.ForwardedRef<P>
        ) => {
            const navigate = useNavigate();

            return (
                <WrappedComponent
                    ref={ref}
                    {...(props as P)}
                    navigate={navigate}
                />
            );
        };

        const ComponentWithNavigate = React.forwardRef(render);
        ComponentWithNavigate.displayName = `withNavigate(${displayName})`;

        return ComponentWithNavigate;
    };
}

import React from 'react';
import { Location, useLocation } from 'react-router-dom';

export interface WithLocationProps {
    location: Location;
}

export default function withLocation<
    P extends WithLocationProps = WithLocationProps
>() {
    return (WrappedComponent: React.ComponentType<P>) => {
        const displayName =
            WrappedComponent.displayName ||
            WrappedComponent.name ||
            'Component';

        const render = (
            props: Omit<P, keyof WithLocationProps>,
            ref: React.ForwardedRef<P>
        ) => {
            const location = useLocation();

            return (
                <WrappedComponent
                    ref={ref}
                    {...(props as P)}
                    location={location}
                />
            );
        };

        const ComponentWithLocation = React.forwardRef(render);
        ComponentWithLocation.displayName = `withLocation(${displayName})`;

        return ComponentWithLocation;
    };
}

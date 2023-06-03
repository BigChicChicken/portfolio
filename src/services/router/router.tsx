import React from 'react';
import App from 'views/App/App';
import NotFound from 'views/NotFound/NotFound';

const routes = [
    {
        path: '/:language',
        element: <App />,
    },
    {
        path: '/',
        element: <NotFound />,
    },
];

export default routes;

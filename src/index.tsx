import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from 'services/router/router';
import * as process from 'process';

const node = document.getElementById('root');

if (node) {
    ReactDOM.createRoot(node).render(
        <RouterProvider
            router={createBrowserRouter(Object.values(routes), {
                basename: process.env.ROUTER_BASENAME,
            })}
        />
    );
}

export default routes;

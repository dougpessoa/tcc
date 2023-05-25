import React, { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { app1RoutingPrefix } from "./constants";

const App1Lazy = lazy(() => import("../components/App1"));
const App2Lazy = lazy(() => import("../components/App2"));

export const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to={`/${app1RoutingPrefix}`} />,
      },
      {
        path: `/home/*`,
        element: <Suspense fallback="Loading"><App1Lazy /></Suspense>,
      },
      {
        path: `/user/*`,
        element: <Suspense fallback="Loading"><App2Lazy /></Suspense>,
      },
    ],
  }
];
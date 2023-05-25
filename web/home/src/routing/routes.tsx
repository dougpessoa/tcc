import React from 'react';
import { Outlet } from "react-router-dom";
import { NavigationManager } from "../utils/NavigationManager";
import { Home } from "../pages/home";
import { CreateMessage } from "../pages/createMessage";
import { TypeAnoniMeProvider } from '../contexts/useTypeAnoniMe';

export const routes = [
  {
    path: "/",
    element: (
      <TypeAnoniMeProvider>
        <NavigationManager>
          <Outlet />
        </NavigationManager>
      </TypeAnoniMeProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "create-message",
        element: <CreateMessage />,
      },
    ],
  },
];

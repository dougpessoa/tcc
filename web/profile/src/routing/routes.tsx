import React from 'react';
import { Outlet } from "react-router-dom";
import { NavigationManager } from "../utils/NavigationManager";
import { User } from '../pages/user'
import { Message } from '../pages/message'
import { NotFound } from '../pages/notFound';

export const routes = [
  {
    path: "/",
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: <NotFound />,
      },
      {
        path: "/:username/:platform",
        element: <User />,
      },
      {
        path: "/:username/:platform/message/:id",
        element: <Message />,
      },
    ],
  },
];

import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Dashboard from "./views/Dashboard";
import UserProfileLite from "./views/UserProfileLite";
import Community from "./views/Community";
import Tutorials from "./views/Tutorials";

import Meetups from "./views/Meetups";
import Login from "./views/Login";
import Registration from "./views/Registration";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: Community
  },
  {
    path: "/tutorials",
    layout: DefaultLayout,
    component: Tutorials
  },

  {
    path: "/meetups",
    layout: DefaultLayout,
    component: Meetups
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: Login
  },
  {
    path: "/registration",
    layout: DefaultLayout,
    component: Registration
  }
];

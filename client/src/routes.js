import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import UrlForm from "./views/UrlContainer";

export default [
  {
    path: "/",
    layout: DefaultLayout,
    component: UrlForm
  },
];

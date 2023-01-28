import React from "react";
import Home from "./Home";
import Main from "./Main";
import Profile from "./Profile";

export default function Screen({ path }) {
  if (path === "/") return <Home />;
  if (path === "/main") return <Main />;
  if (path === "/profile") return <Profile />;
  return <div>404</div>;
}

import React, { useEffect, useState } from "react";
import "./App.css";
import Screen from "./components/Screen";

function App() {
  const [currentRoute, setCurrentRoute] = useState(null);
  useEffect(() => {
    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const handleLocationChange = () => {
    const path = window.location.pathname;
    if (path === "/") setCurrentRoute("home");
    if (path === "/main") setCurrentRoute("main");
    if (path === "/profile") setCurrentRoute("profile");
    if (path === "/404") setCurrentRoute("404");
  };

  const handleAddRoute = (path) => {
    if (typeof path === "string") window.history.pushState({}, null, path);
    if (typeof path === "number") window.history.go(path);
    handleLocationChange();
  };
  return (
    <>
      <div className="App">
        <button onClick={() => handleAddRoute(-1)}>Back</button>
        <button onClick={() => handleAddRoute("/")}>Home</button>
        <button onClick={() => handleAddRoute("/main")}>Main</button>
        <button onClick={() => handleAddRoute("/profile")}>Profile</button>
        <button onClick={() => handleAddRoute(1)}>Forward</button>
        <button onClick={() => handleAddRoute(0)}>Reload</button>
      </div>
      <div className="screen">
        {currentRoute === "home" ? (
          <Screen path="/" />
        ) : currentRoute === "main" ? (
          <Screen path="/main" />
        ) : currentRoute === "profile" ? (
          <Screen path="/profile" />
        ) : currentRoute === "404" ? (
          <Screen path="/404" />
        ) : null}
      </div>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import "./App.css";

import * as ALLROUTES from "./routes";
import type { Route as RouteType } from "./types";
import { Layout } from "./components";
import { HomePage } from "./pages";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Routes>
          {ALLROUTES.default.map((route: RouteType) => (
            <Route
              key={route.path}
              element={<route.component />}
              path={route.path}
            />
          ))}
        </Routes>
      </Layout>
    </div>
  );
};

export default App;

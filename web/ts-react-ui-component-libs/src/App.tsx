import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { AntExample } from "./ui_lib_examples/Ant";
import "./App.css";

const CONTENT = [
  {
    tabName: "Emotion",
    path: "emotion",
    component: <h1>Emotion</h1>,
  },
  {
    tabName: "Styled Components",
    path: "styled",
    component: <h1>Styled Components</h1>,
  },
  {
    tabName: "Ant",
    path: "ant",
    component: <AntExample />,
  },
  {
    tabName: "Mui",
    path: "mui",
    component: <h1>Mui</h1>,
  },
];

const Layout = ({ links }: { links: [string, string][] }) => (
  <div className="App">
    <header className="App-header">
      <Navbar links={links} />
    </header>
    <main className="App-main">
      <Outlet />
    </main>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Layout links={CONTENT.map(({ tabName, path }) => [tabName, path])} />
        }
      >
        {CONTENT.map(({ tabName, component, path }) => (
          <Route key={tabName} path={path} element={component} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

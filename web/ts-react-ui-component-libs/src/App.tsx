import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
// import { AntExample } from "./ui_lib_examples/Ant";
import { MuiExample } from "./ui_lib_examples/Mui";
import { AdobeExample } from "./ui_lib_examples/Adobe";
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
    // Uncomment to reveal Ant examples and see how their CSS pollutes
    // the rest of the tabs
    // component: <AntExample />,
    component: <h1>Ant Example</h1>,
  },
  {
    tabName: "Mui",
    path: "mui",
    component: <MuiExample />,
  },
  {
    tabName: "Chakra UI",
    path: "chakra",
    component: <h1>Chakra</h1>,
  },
  {
    tabName: "Evergreen",
    path: "evergreen",
    component: <h1>Evergreen</h1>,
  },
  {
    tabName: "Adobe",
    path: "adobe",
    component: <AdobeExample />,
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

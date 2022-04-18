import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Helmet } from "react-helmet";
import customizations from "./assets/response.json";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="assets/display-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>{customizations.content.title}</title>
      </Helmet>
      <div
        className="app-container"
        style={{
          backgroundImage: `url(${customizations.meta.backgroundImage})`,
          backgroundColor: customizations.meta.backgroundColor,
        }}
      >
        <Login components={customizations.components} />
      </div>
    </>
  );
}

export default App;

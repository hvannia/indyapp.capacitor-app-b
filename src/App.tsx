import { Outlet } from "react-router-dom";
import "./App.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css"; // Remove if nothing is visible
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { setupIonicReact } from "@ionic/react";

setupIonicReact();

function App() {
  return (
    <>
      <div style={{ margin: "1rem", paddingTop: "env(safe-area-inset-top)" }}>
        <h2>Dark One</h2>
        {/* login */}
        <Outlet></Outlet>
      </div>
      <p className="read-the-docs">(c) Indigo apps</p>
    </>
  );
}

export default App;

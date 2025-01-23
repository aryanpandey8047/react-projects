import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import SideNavBar from "./components/SideNavBar";

function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        <SideNavBar />
        <main
          style={{
            flex: 1,
            padding: "20px",
            color: "black",
          }}
        >
          Main Content Area
        </main>
      </div>
    </Provider>
  );
}

export default App;

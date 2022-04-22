import React from "react";
import { Paper } from "react-three-paper";
import "./App.css";
import { main } from "./three/main";

function App() {
  return (
    <div className="main">
      <Paper
        script={main}
        style={{
          backgroundColor: "#2e2e2e",
        }}
        onEntry={() => console.log("Paper has entered the viewport!")}
        onExit={() => console.log("Paper has left the viewport!")}
        onError={() => console.log("Oops! Something went wrong")}
      />
    </div>
  );
}

export default App;

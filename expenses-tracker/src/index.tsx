import { createServer } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./pages/App";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "xxx",
          amount: 500,
          type: "withdraw",
          category: "home",
          dateCreated: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

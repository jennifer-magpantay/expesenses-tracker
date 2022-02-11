import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./pages/App";

createServer({
  models: {
    transaction: Model,
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });

    /*
    // TODO: find solution to delete through schema
    this.delete("/transactions/:id", (schema, request) => {
      let id = request.params.id; //OUTPUT ':id', not the proper id number
      return schema.transactions.find(id).destroy(); //DOES NOT WORK
    });
    */
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

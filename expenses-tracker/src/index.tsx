import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./pages/App";

createServer({
  models: {
    transaction: Model,
  },
  // seeds(server) {
  //   server.db.loadData({
  //     transactions: [
  //       {
  //         id: 1,
  //         title: "Mobile phone",
  //         amount: 350,
  //         type: "outcome",
  //         category: "shopping",
  //         date: new Date(),
  //       },
  //     ],
  //   });
  // },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
      // [
      //   {
      //     id: 1,
      //     title: "xxx",
      //     amount: 500,
      //     type: "income",
      //     category: "home",
      //     dateCreated: new Date(),
      //   }
      // ];
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

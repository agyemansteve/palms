import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

window.addEventListener("load", function () {
  this.setTimeout(() => {
    const app = document.querySelector(".app");
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
    app.style.display = "block";
  }, 5000);
});

ReactDOM.render(
  <Provider store={store}>
    <div>
      <div className="preloader">
        <div>
          THE PALMS
          <i className="fas fa-feather-alt leaf" />
        </div>
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <App />
    </div>
  </Provider>,
  document.getElementById("root")
);

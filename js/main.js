import { declareEvents } from "./events.js";
import { makeRestApi } from "./manager.js";

window.onload = () => {
  declareEvents();
  makeRestApi();
};

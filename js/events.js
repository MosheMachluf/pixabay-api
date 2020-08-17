import { makeRestApi, createPixa } from "./manager.js";
import { doRestApi } from "./api.js";

let sort = document.querySelector("#id_sort_select");
export const declareEvents = () => {
  let search_btn = document.querySelector("#search_btn");
  search_btn.addEventListener("click", makeRestApi);

  sort.addEventListener("change", async () => {
    let data = await doRestApi();
    let pics = await data;
    if (sort.value === "likes") pics.sort(sortArray(sort.value)).reverse();
    else pics.sort(sortArray(sort.value));
    createPixa(pics);
  });

  searchQ.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      search_btn.click();
    }
  });
};

const sortArray = (prop) => {
  return function compare(a, b) {
    if (a[prop] < b[prop]) return -1;
    if (a[prop] > b[prop]) return 1;
    return 0;
  };
};

import { doRestApi } from "./api.js";
import Picture from "./class.js";

export const makeRestApi = async () => {
  let data = await doRestApi();
  let json_ar = await data;
  createPixa(json_ar);
};

export const createPixa = (_ar) => {
  let pr = document.querySelector("#view_result");
  let error = document.querySelector("#error");

  pr.innerHTML = "<h1>Loading ...</h1>";
  pr.innerHTML = "";
  error.innerHTML = "";

  _ar.map((picture) => {
    let { user, largeImageURL, likes, pageURL, tags } = picture;
    let pics = new Picture(
      pr,
      user,
      largeImageURL,
      likes,
      pageURL,
      largeImageURL,
      tags
    );
    pics.renderHtml();
  });

  if (!_ar.length) {
    error.innerHTML = `<div class="alert alert-danger" role="alert">
                       No Find Result</div>`;
  }
};

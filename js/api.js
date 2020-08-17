export const doRestApi = async () => {
  const input_search = document.querySelector("#searchQ").value;

  let myUrl = `https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${input_search}&image_type=photo&pretty=true`;

  try {
    const resp = await fetch(myUrl);
    const data = await resp.json();
    return data.hits;
  } catch (err) {
    console.log(err);
  }
};

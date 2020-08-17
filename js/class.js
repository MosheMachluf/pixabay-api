class Picture {
  constructor(_parent, _name, _img, _likes, _url, _big_pic, _tags) {
    this.parent = _parent;
    this.name = _name;
    this.img = _img;
    this.likes = _likes;
    this.url = _url;
    this.big_pic = _big_pic;
    this.tags = _tags;
  }

  renderHtml() {
    let newCard = document.createElement("div");
    newCard.className = "item-grid border shadow-sm";
    this.parent.appendChild(newCard);

    let img = document.createElement("img");
    img.className = "img-item";
    img.src = this.img;
    img.alt = this.tags;
    newCard.appendChild(img);

    img.addEventListener(
      "click",
      function () {
        window.open(this.big_pic);
      }.bind(this)
    );

    let bodyCard = document.createElement("div");
    bodyCard.className = "card-body d-none d-md-block";
    newCard.appendChild(bodyCard);

    bodyCard.innerHTML += `<small>
                <span>
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                ${this.likes}
                </span>
                <span class="ml-2">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                ${this.name}
                </span>
                <div class="mt-2">
                    <i class="fa fa-tag" aria-hidden="true"></i>
                    ${this.tags}
                </div>
                <small class="mt-2">
                    <a href="${this.url}" target="_blank">Go Pixabay</a>
                </small>
            </small>`;
  }
}

export default Picture;

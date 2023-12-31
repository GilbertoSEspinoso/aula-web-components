class Cardnews extends HTMLElement{
  constructor(){
    super();

    const shadow = this.attachShadow({mode:"open"});
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build(){
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card" );

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");
    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title")
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");
    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "assets/person-icon.png"
    newsImage.alt = "Darth Vader";
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }
  styles(){
    const style = document.createElement("style");
    style.textContent = `
    a{

    }
    .card{
      width: 80%;
      box-shadow: -1px 1px 52px -7px rgba(0,0,0,0.79);
      -webkit-box-shadow: -1px 1px 52px -7px rgba(0,0,0,0.79);
      -moz-box-shadow: -1px 1px 52px -7px rgba(0,0,0,0.79);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .card__left, .card__rigth{
    }
    .card__left{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
    .card__left > span{
      font-weight: 400;
    }
    .card__left > h1,a{
      margin-top: 15px;
      font-size: 25px;
      text-decoration: none;
      font-weight: bold;
    }
    .card__left > p{
      color: rgb(70, 70, 70);
    }
    .card__right > img{
      width: 220px;
    }
    `;

    return style; 
  }
}

customElements.define("card-news", Cardnews);
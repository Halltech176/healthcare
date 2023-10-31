let image = new Image();
import { FooterData } from "./data.js";

const renderValues = () => {
  const data = FooterData.map((item) => {
    return `<div class='section'>
    <h3>${item.title}</h3>
    <ul>
    ${item.content.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    </div>`;
  });

  return data;
};

const renderFooter = () => {
  const footer = document.createElement("footer");

  footer.setAttribute("class", "footer");

  let content1 = `<div class='content'><img src='../assets/images/thuram.png'/> <p> We offer the best solution for your health care </p> </div>`;

  const content = renderValues();

  footer.innerHTML += content1;
  content.forEach((item) => {
    footer.innerHTML += item;
  });

  document.body.insertAdjacentElement("beforeend", footer);
};
renderFooter();

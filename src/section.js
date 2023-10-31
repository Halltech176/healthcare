import { HomeCare, NursingService, LabTechnicians } from "./data.js";

function renderHomeCareService() {
  const container = document.querySelector(".home-care-service");

  container.innerHTML = "";

  HomeCare.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = ` <section class='image'>
    <img src=${item.icon} /> </section> <h1> ${item.title}  </h1> <p> ${item.content} </p> `;
    container.appendChild(div);
    div.addEventListener("click", function () {
      window.location.href = "contact-us.html";
    });
  });
}

renderHomeCareService();

function renderNursingService() {
  const container = document.querySelector(".nursing-service");

  container.innerHTML = "";

  NursingService.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = ` <section class='image'>
      <img src=${item.icon} /> </section> <h1> ${item.title}  </h1> `;
    div.addEventListener("click", function () {
      window.location.href = "job-seeker.html";
    });
    container.appendChild(div);
  });
}

renderNursingService();

function renderLabCareService() {
  const container = document.querySelector(".lab-care-service");

  container.innerHTML = "";

  LabTechnicians.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = ` <section class='image'>
      <img src=${item.icon} /> </section> <h1> ${item.title}  </h1> <p> ${item.content} </p> `;

    container.appendChild(div);
    div.addEventListener("click", function () {
      window.location.href = "contact-us.html";
    });
  });
}

renderLabCareService();
